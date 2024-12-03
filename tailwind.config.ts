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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      container: {
        center: true, 
        padding: '2rem', 
        screens: {
          sm: "100%", 
          md: "80%", 
          lg: "75%",
          xl: "70%",  
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
