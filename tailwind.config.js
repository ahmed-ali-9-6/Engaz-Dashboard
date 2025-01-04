/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        "poppins": ["Poppins", "sans-serif"],
        "manrope": ["Manrope", "sans-serif"]
      },
      colors:{
        "mainColor" : "#003465",
        "darkBlueColor" : "#1d4ed8",
        "textColor" : "#D9D9D980",
        "hoverColor" : "#335d84",
      },
      container: {
        center: true,
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1380px',
        },
      },
    },
  },
  plugins: [],
}