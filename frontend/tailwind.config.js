/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ont: {
          orange:  '#FF7710',
          'orange-dim': '#CC5F0D',
          black:   '#1A1A1A',
          card:    '#252525',
          surface: '#2E2E2E',
          border:  '#333333',
          muted:   '#3A3A3A',
          text: {
            primary:   '#FFFFFF',
            secondary: '#9A9A9A',
            dim:       '#666666',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'ont-card': '0 1px 3px rgba(0,0,0,0.4)',
        'ont-focus': '0 0 0 2px rgba(255,119,16,0.35)',
      },
    },
  },
  plugins: [],
}
