/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'headings': {
          500: '#0f412b',
        },
      },
    },
    fontFamily: {
      passion: ['var(--font-passion-one)'],
      lexend: ['var(--font-lexend-deca)'],
      overpass: ['var(--font-overpass)']
    }
  },
  plugins: [],
}
