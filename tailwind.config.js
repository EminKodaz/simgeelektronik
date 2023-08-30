/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkred: "#5f1515",
        lightred: "#9b3333",
        "lightred-2": "#df27279d",
        lightrans: "#860f0fa4",
        darktrans: "#440505e7",
      },
      borderRadius: {
        "4xl": "2.7rem",
      },
      aspectRatio: {
        "3": "3 / 2",
      },
    },
  },
  plugins: [],
};
