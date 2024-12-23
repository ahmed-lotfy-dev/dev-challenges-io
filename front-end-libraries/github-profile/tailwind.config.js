/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // Using modern `rgb`
      gradientColor1: "rgb(17, 22, 41)", // --gradient-clr-1: #111629
      gradientColor2: "rgb(29, 27, 72)", // --gradient-clr-2: #1D1B48
      textColor2: "rgb(54, 98, 227)", // --text-clr-2: #3662E3
      pageBgColor: "rgb(32, 41, 58)", // --page-bg-clr: #20293A
      clrNotKnow1: "rgb(54, 65, 83)", // --clr-not-know-1: #364153
      clrNotKnow2: "rgb(74, 85, 103)", // --clr-not-know-2: #4A5567
      textColor1: "rgb(205, 213, 224)", // --text-clr-1: #CDD5E0
    },
    fontSize: {
      mainText: "2rem", // --main-txt: 2rem
      titleText: "1.25rem", // --title-txt: 1.25rem
      bodyText: "1rem", // --body-txt: 1rem
      smallText: "0.75rem", // --small-txt: 0.75rem
    },
  },
  plugins: [],
}
