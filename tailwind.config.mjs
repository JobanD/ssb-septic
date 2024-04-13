/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx,css}",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: ["class"],
  prefix: "",
  theme: {
    extend: {
      colors: {
        primary: "hsl(217, 90%, 55%)", // A vibrant shade of blue.
        secondary: "hsl(146, 64%, 42%)", // A lush shade of green.
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Using Inter as the primary sans-serif font.
        serif: ["Merriweather", "serif"], // Using Merriweather for serif typography.
      },
      spacing: {
        128: "32rem", // Adding a custom spacing.
        144: "36rem",
      },
      borderRadius: {
        xl: "1rem", // Defining extra-large border-radius.
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
