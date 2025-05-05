/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        proxima: [
          '"Proxima Nova"',
          'system-ui',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'sans-serif',
        ],
      },
      colors: {
        ml: {
          yellow: '#FFE600',
          yellowLight: '#FFF380',
          blue: '#3483FA',
          grayLight: '#EEEEEE',
          gray: '#999999',
          white: '#FFFFFF',
          black: '#333333',
          red: '#E50000',
          green: '#00A650',
        },
      },
    },
  },
  plugins: [],
}
