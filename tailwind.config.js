/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#800020",
          "primary-content": "#cfcfcf",
          secondary: "#50C878",
          "secondary-content": "#FAFAFA",
          accent: "#FFD700",
          neutral: "#001015",
          "base-100": "#25292e",
          info: "#0094ff",
          success: "#00bc59",
          warning: "#e9b600",
          error: "#f90026",
        },
        // mytheme: {
        //   primary: "#059669",
        //   secondary: "#5c5b61",
        //   "secondary-content": "#059669",
        //   "base-100": "#cfcfcf",
        //   "base-200": "#BEBEBE",
        //   "base-300": "#A9A9A9",
        //   "base-content": "#30313D",
        // },
      },
    ],
  },
  plugins: [require("daisyui")],
};
