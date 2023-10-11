import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        font: '#8b9dbb',
        fontBright: '#e2e8f0',
        decoration: '#24d2d0',
        linkActive: '#e2e8f0'
      },
      backgroundColor: {
        body: '#0f172a',
        decorationLight: '#122c3f'
      },
      gridTemplateColumns: {
        'layout': '1fr 2fr',
      }
    },
  },
  plugins: [],
}
export default config
