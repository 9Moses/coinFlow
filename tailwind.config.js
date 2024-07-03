/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#2EA8A2",
        "primary-200": "#004442",
        "gray-100": "#3B3E48",
        "gray-200": "#777C90",
        "background-gradient":
          "linear-gradient(74deg, rgba(255,255,255,1) 0%, rgba(186,236,233,1) 100%)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(74deg, rgba(255,255,255,1) 0%, rgba(186,236,233,1) 100%)",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
