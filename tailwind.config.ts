import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        inter: ["var(--font-inter)"],
        timesNewRoman: ["var(--font-timesNewRoman)"],
      },
      boxShadow: {
        custom: "0px 4px 54px 0px rgba(102, 143, 165, 0.3)",
      },
      colors: {
        primary: "#30434D",
        secondary: "#FFFFFF",
        accentGreen: "#4FB848",
      },
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        navsize: { max: "1180px" },
        tab: { max: "991px" },
        mob: { max: "768px" },
      },
    },
  },
  plugins: [],
};

export default config;
