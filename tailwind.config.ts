import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish: ["Mulish"],
      },
      colors: {
        appWhite: "#fefefe",
        appBlack: "#1e1e1e",
        appGreen: "#65B741",
      },
    },
  },
  plugins: [],
} satisfies Config;
