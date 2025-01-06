import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;

module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}', // Adjust paths based on your project structure
    './public/index.html', // Include HTML files if needed
  ],
  theme: {
    extend: {}, // Add custom theme modifications here if needed
  },
  plugins: [], // Add Tailwind plugins here if needed
};
