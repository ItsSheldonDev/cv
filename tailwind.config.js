/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#8552ff',
        'secondary': '#4084ff',
        'background': {
          DEFAULT: '#131825',
          light: '#1a2032',
        },
        'card': '#1e2235',
        'border': '#343957',
        'muted': '#a0a0b0'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.15)',
        'hover': '0 10px 30px rgba(0, 0, 0, 0.2)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #8552ff 0%, #4084ff 100%)',
      },
    },
  },
  plugins: [],
}