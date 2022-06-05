module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        manufacturerTheme: {
          primary: "#fdb913",
          secondary: "#1b1b1b",
          accent: "#9c9c9c",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
}