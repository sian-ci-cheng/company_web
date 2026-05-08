function parseCSVLine(line: string): [string, string, string] {
  const out: string[] = [];
  let cur = '';
  let inQ = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      if (inQ && line[i + 1] === '"') { cur += '"'; i++; }
      else { inQ = !inQ; }
    } else if (c === ',' && !inQ) { out.push(cur); cur = ''; }
    else { cur += c; }
  }
  out.push(cur);
  return [out[0] ?? '', out[1] ?? '', out[2] ?? ''];
}

function setPath(obj: Record<string, unknown>, path: string, val: unknown) {
  const parts = path.split('.');
  let node = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (!node[parts[i]]) node[parts[i]] = {};
    node = node[parts[i]] as Record<string, unknown>;
  }
  node[parts[parts.length - 1]] = val;
}

export function parseCSV(csv: string) {
  const en: Record<string, unknown> = {};
  const zh: Record<string, unknown> = {};
  for (const line of csv.trim().split('\n').slice(1)) {
    if (!line.trim()) continue;
    const [key, enVal, zhVal] = parseCSVLine(line);
    if (!key) continue;
    const toVal = (v: string) => (v.includes('|') ? v.split('|') : v);
    setPath(en, key, toVal(enVal));
    setPath(zh, key, toVal(zhVal || enVal));
  }
  return { en, zh };
}
