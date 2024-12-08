const words = [
  "apple",
  "banana",
  "cherry",
  "grape",
  "orange",
  "peach",
  "pear",
  "plum",
  "kiwi",
  "mango",
  "elephant",
  "tiger",
  "giraffe",
  "dolphin",
  "whale",
  "penguin",
  "kangaroo",
  "zebra",
  "panda",
  "monkey",
  "mountain",
  "river",
  "ocean",
  "forest",
  "desert",
  "volcano",
  "canyon",
  "island",
  "valley",
  "waterfall",
  "computer",
  "laptop",
  "keyboard",
  "mouse",
  "monitor",
  "internet",
  "browser",
  "server",
  "database",
  "cloud",
  "freedom",
  "journey",
  "mystery",
  "adventure",
  "dream",
  "harmony",
  "wisdom",
  "courage",
  "victory",
  "destiny",
  "soccer",
  "cricket",
  "tennis",
  "badminton",
  "hockey",
  "baseball",
  "basketball",
  "football",
  "volleyball",
  "rugby",
  "violet",
  "indigo",
  "blue",
  "green",
  "yellow",
  "orange",
  "red",
  "magenta",
  "cyan",
  "white",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "circle",
  "square",
  "triangle",
  "rectangle",
  "hexagon",
  "octagon",
  "polygon",
  "ellipse",
  "cube",
  "sphere",
]

const randomBtn = document.querySelector(".random")
const resetBtn = document.querySelector(".reset")
const scrambledWordElement = document.querySelector(".scrambled-word")
const mainWordElement = document.querySelector(".main-word")
const triesElement = document.querySelector(".tries-show")
const mistakesElement = document.querySelector(".mistakes-show")
const triesSpans = document.querySelectorAll(".tries-circle")

let tries = 5
let mistakes = []
let word

function generateWord() {
  word = words[Math.floor(Math.random() * words.length)]
}

function addScrambledWordToDom() {
  let scrambledWord = word.split("").sort(() => Math.random() - 0.5)

  scrambledWordElement.innerHTML = scrambledWord
    .map((letter) => `<span>${letter}</span>`)
    .join("")
}

function updateTriesDisplay() {
  triesElement.textContent = tries
  triesSpans.forEach((span, index) => {
    if (index < tries) {
      span.classList.add("active")
    } else {
      span.classList.remove("active")
    }
  })
}

function mainWordToDomInput() {
  mainWordElement.innerHTML = ""
  mistakesElement.textContent = "-"
  updateTriesDisplay()
  let inputElements = []
  word.split("").forEach((letter, index) => {
    const input = document.createElement("input")
    input.type = "text"
    input.maxLength = 1
    input.classList.add("letter-input")
    inputElements.push(input)
    input.addEventListener("focus", () => {
      input.classList.add("active")
    })
    input.addEventListener("input", (event) => {
      const inputValue = event.target.value.toLowerCase()
      if (inputValue === letter.toLowerCase()) {
        input.value = letter
        input.disabled = true
        const nextInput = inputElements[index + 1]
        if (nextInput) {
          nextInput.focus()
        }
      } else {
        input.value = ""
        mistakes.push(inputValue)
        tries--
        if (tries <= 0) {
          alert("Game over! No tries left.")
        }
        updateTriesDisplay()
        mistakesElement.textContent = mistakes.join(", ")
      }
    })
    mainWordElement.appendChild(input)
  })
  inputElements[0]?.focus()
}

function randomAndReset() {
  generateWord()
  addScrambledWordToDom()
  mainWordToDomInput()
  updateTriesDisplay()
  tries = 5
  mistakes = []
  mistakesElement.textContent = ""
}

document.addEventListener("DOMContentLoaded", () => {
  randomAndReset()
})

randomBtn.addEventListener("click", () => {
  randomAndReset()
})

resetBtn.addEventListener("click", () => {
  randomAndReset()
})
