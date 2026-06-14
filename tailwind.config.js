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
      borderRadius: {
        xl: "calc(0.75rem + 4px)",
        "2xl": "calc(1rem + 6px)",
        "3xl": "calc(1.5rem + 8px)",
      },
      keyframes: {
        "fade-rise": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "fade-rise": "fade-rise 0.8s ease-out both",
        "fade-rise-delay": "fade-rise 0.8s ease-out 0.2s both",
        "fade-rise-delay-2": "fade-rise 0.8s ease-out 0.4s both",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
