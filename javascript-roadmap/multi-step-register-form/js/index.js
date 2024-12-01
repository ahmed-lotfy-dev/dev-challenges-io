const forms = document.querySelectorAll(".form")

const stepBtn1 = document.querySelector(".step1-button")
const stepBtn2 = document.querySelector(".step2-button")
const stepBtn3 = document.querySelector(".step3-button")

const stepNumber = document.querySelector(".numStep")

const checkboxes = document.querySelectorAll('input[type="checkbox"]')

const ulElement = document.querySelector("ul")

const stepIndicator = document.querySelectorAll(".step-indicator")

let step = 1

forms.forEach((el, id) => {
  el.style.display = id === 0 ? "block" : "none"
})

const nextStep = () => {
  if (step > 3) {
    step = 1
  }
  step++
}

const showStep = () => {
  forms.forEach((el) => (el.style.display = "none"))
  forms[step - 1].style.display = "block"
  showRadioStepLink()
}

function showRadioStepLink() {
  stepIndicator.forEach((el, id) => {
    el.classList.remove("active-step")
  })
  for (let i = 0; i < step; ++i) stepIndicator[i].classList.add("active-step")
}
console.log(step)
stepBtn1.addEventListener("click", (event) => {
  if (forms[0].checkValidity()) {
    event.preventDefault()
    forms.forEach((el) => (el.style.display = "none"))
    forms[step - 1].style.display = "block"
    nextStep()
    stepNumber.textContent = step
    showStep()
  }
})

stepBtn2.addEventListener("click", (event) => {
  event.preventDefault()
  const atLeastOneChecked = Array.from(checkboxes).some(
    (checkbox) => checkbox.checked
  )
  if (!atLeastOneChecked) {
    alert("You need to choose at least 1 choice")
  } else {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let userInterest = document.querySelectorAll(
      ".step2 input[type=checkbox]:checked"
    )
    let nameField = document.getElementById("userName")
    let emailField = document.getElementById("userEmail")
    nameField.textContent = name
    emailField.textContent = email
    userInterest.forEach((el) => {
      let liElement = document.createElement("li")
      liElement.textContent = el.value
      ulElement.appendChild(liElement)
    })
    nextStep()
    stepNumber.textContent = step
    showStep()
  }
})

stepBtn3.addEventListener("click", (event) => {
  event.preventDefault()
  alert("User data collected successfully")
})

console.log(forms)
