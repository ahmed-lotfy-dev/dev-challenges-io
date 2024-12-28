/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme")

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      pageBgColor: "#1B1D1F", // --page-bg-clr: #20293A
      componentClr: "#282B30", // --clr-not-know-1: #364153
      activeBgCheckbox: "#4E80EE", // --clr-not-know-2: #4A5567
      activeBgFilter: "#6C727F", // --text-clr-2: #3662E3
      textColor: "#D2D5DA", // --text-clr-1: #CDD5E0
      transparent: "transparent",
    },
    fontSize: {
      titleBigText: "2rem", // --main-txt: 2rem semibold
      largeText: "1rem", // --title-txt: 1.25rem semibold
      mediumText: "1rem", // --body-txt: 1rem bold
      smallText: "0.75rem", // --small-txt: 0.75rem bold
    },
    fontFamily: {
      vietnam: ["Be Vietnam Pro", ...fontFamily.sans],
    },
  },
  plugins: [],
}
