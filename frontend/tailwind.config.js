import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        pirata: ["Pirata One", "sans-serif"],
      },
      boxShadow: {
        'selling': "-12px 15px 0 -8px black, -12px 15px 0 0px white",
        'selling-hover': "-12px 15px 0 -8px hsl(222.2deg 47.4% 11.2% / .5%), -12px 15px 0 0px hsl(222.2deg 47.4% 11.2% / 90%)",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        }
      })
    })
  ],
}

