// module.exports = {
//   content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: { primary: '#6366F1' },
//       fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] },
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366F1'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    },
  },
  plugins: [],
}
