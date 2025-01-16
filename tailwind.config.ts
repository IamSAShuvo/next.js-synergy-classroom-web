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
        headingColor: "var(--headingColor)",
        subHeadingColor: "var(--subHeadingColor)",
        descriptionColor: "var(--descriptionColor)",
        buttonColor: "var(--buttonColor)",
        enrolledCountColor: "var(--enrolledCountColor)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
