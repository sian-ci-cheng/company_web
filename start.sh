#!/bin/bash
set -e

FRONTEND="/home/user/company_web/frontend"

# Check Node version
NODE_MAJOR=$(node -e "process.stdout.write(process.versions.node.split('.')[0])" 2>/dev/null || echo "0")
if [ "$NODE_MAJOR" -lt 18 ]; then
  echo "Node.js >= 18 required (current: $(node --version 2>/dev/null || echo 'not found'))"
  exit 1
fi

cd "$FRONTEND"

# Install deps if node_modules is missing
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

echo "Starting dev server → http://localhost:3000"
npm run dev
