/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'spice-green': '#1B4332',
        'spice-gold': '#C8960C',
        'spice-cream': '#F8F4E9',
        'spice-brown': '#5C3D2E',
      },
    },
  },
  plugins: [],
}
