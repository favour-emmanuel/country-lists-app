import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    darkMode: "class",
    extend: {
      fontFamily: {
        mulish: ["Mulish"],
      },
      colors: {
        appWhite: "#fefefe",
        appDark: "#1e1e1e",
        appBlack: "#0d0d0d",
        appGreen: "#65B741",
      },
    },
  },
  plugins: [],
} satisfies Config;
