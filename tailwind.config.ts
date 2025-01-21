import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "var(--primaryColor)",
        secondaryColor: "var(--secondaryColor)",
        steelBlue: "var(--steelBlue)",
        skyBlue: "var(--skyBlue)",
        leafGreen: "var(--leafGreen)",
        midnightBlack: "var(--midnightBlack)",
      },
    },
  },
  plugins: [],
} satisfies Config;
