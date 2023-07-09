/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: { min: "0", max: "639px" },
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    variants: {
      extend: {},
      margin: ["responsive", "direction"],
      padding: ["responsive", "direction"],
      inset: ["responsive", "direction"],
      translate: ["responsive", "direction"],
      display: ["responsive", "direction"],
      textAlign: ["responsive", "direction"],
      flexDirection: ["responsive", "direction"],
    },
  },
  plugins: [],
};
