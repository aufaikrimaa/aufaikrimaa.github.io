/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        0.5: "4px",
        1: "8px",
        2: "12px",
        3: "16px",
        3.5: "20px",
        4: "24px",
        5: "32px",
        6: "48px",
        7: "56px",
        8: "60px",
        9: "68px",
        10: "76px",
        11: "80px",
        12: "88px",
        13: "92px",
        14: "100px",
        16: "104px",
        18: "120px",
        20: "144px",
        24: "220px",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
  },
  plugins: [],
};
