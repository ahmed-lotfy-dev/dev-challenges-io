const form = document.querySelector("form")
const stepBtn1 = document.querySelector(".step1-button")
const stepBtn2 = document.querySelector(".step2-button")
const stepBtn3 = document.querySelector(".step3-button")

let activeStep = 0

stepBtn1.addEventListener("click", (e) => {
  e.preventDefault()
  console.log(activeStep)
  activeStep++
  console.log(activeStep)
})
console.log(form)
console.log(FormData)

