// tailwind.config.js
export const content = [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    fontFamily: {
      poppins: ["var(--font-londrina)", "sans-serif"],
    },
  },
};
export const plugins = [];
