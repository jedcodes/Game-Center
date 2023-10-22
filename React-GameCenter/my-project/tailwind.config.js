/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl":
          "0px 4px 16px rgba(17,17,26,0.8), 0px 8px 24px rgba(17,17,26,0.8), 0px 16px 56px rgba(17,17,26,0.8)",
      },
    },
  },
  plugins: [],
};
