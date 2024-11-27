document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".humburger-menu")
  const nav = document.querySelector(".navigation")
  const closeBtn = document.querySelector(".close-btn")

  hamburger.addEventListener("click", () => {
    nav.classList.add("open-nav")
  })

  closeBtn.addEventListener("click", () => {
    nav.classList.remove("open-nav")
  })
})

const html = document.querySelector("html")
const dark = document.querySelector(".dark-theme")
const light = document.querySelector(".light-theme")

dark.addEventListener("click", () => {
  html.style.setProperty("color-scheme", "dark")
})
light.addEventListener("click", () => {
  html.style.setProperty("color-scheme", "light")
})
