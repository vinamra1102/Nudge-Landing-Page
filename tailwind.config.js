/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Fredoka'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      colors: {
        background: "hsl(350, 100%, 96%)",
        foreground: "hsl(345, 95%, 20%)",
        "muted-foreground": "hsl(0, 0%, 17%)",
        primary: {
          DEFAULT: "hsl(345, 95%, 20%)",
          foreground: "hsl(350, 100%, 96%)",
        },
        secondary: {
          DEFAULT: "hsl(340, 100%, 88%)",
          foreground: "hsl(345, 95%, 20%)",
        },
        accent: {
          DEFAULT: "hsl(330, 35%, 51%)",
          foreground: "hsl(350, 100%, 96%)",
        },
        border: "hsl(340, 30%, 85%)",
        input: "hsl(340, 30%, 90%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
