/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "5rem",
        },
      },
      screens: {
        laptop: { max: "0px" },
        tablet: { max: "0px" },
        mobile: { max: "1200px" },
      },
      colors: {
        crs: {
          first: "#FF5A00",
          second: "#FFEBE0",
          footer: "#FFCEB5",
          hover: "#FF902926",
          active: "#FFDAC6",
          linear: "#FFA371",

          error: "#FB0B0C",
          blue: "#00CCFF",
          gray: {
            2: "#49495F",
            3: "#010204",
          },
          white: {
            3: "#F3F5F9",
          },
          black: {
            1: "#1E2A38",
            2: "#515D6B",
            3: "#7D8590",
            4: "#A8AEB5",
            5: "#D4D6DA",
            6: "#D4D6DA",
            7: "#E9EBED",
            8: "#F9F9FA",
          },
        },
      },
      fontFamily: {
        Kalameh: "Kalameh",
      },
      boxShadow: {
        lg: "0 0.625rem 0.938rem -0.188rem rgb(0 0 0 / 0.1), 0 0.25rem 0.375rem -0.25rem rgb(0 0 0 / 0.1)",
        md: "0 0.25rem 0.375rem -0.063rem rgb(0 0 0 / 0.1), 0 0.125rem 0.25rem -0.125rem rgb(0 0 0 / 0.1)",
        sm: "box-shadow: 0 0.063rem 0.125rem 0 rgb(0 0 0 / 0.05)",
      },
    },
  },
  plugins: [],
};
