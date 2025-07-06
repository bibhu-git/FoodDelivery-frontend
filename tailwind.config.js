/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        backgroundImage: {
          'header-image': "url('/header_img.png')",
        },
        scrollBehavior: ['smooth'],
      },
  },
  plugins: [],
  }

