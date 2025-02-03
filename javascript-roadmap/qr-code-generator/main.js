const input = document.querySelector("input")
const button = document.querySelector(".qr-generate")
const qrContainer = document.querySelector(".qr-container")
const qrCodeElement = document.querySelector("#qrcode")
const downloadBtn = document.querySelector(".download-btn")
const shareBtn = document.querySelector(".share-btn")
const buttonsElement = document.querySelector(".buttons")

button.addEventListener("click", (event) => {
  event.preventDefault()
  if (input.value.trim() === "") {
    alert("Please enter a URL.")
    return
  }

  qrCodeElement.innerHTML = ""
  const qrCode = new QRCode(qrCodeElement, {
    text: input.value,
    width: 300,
    height: 300,
  })

  qrContainer.classList.add("hidden")
  document.querySelector(".qr-result").classList.remove("hidden")
})
console.log(document.querySelectorAll("button"))
downloadBtn.addEventListener("click", () => {
  const qrCodeCanvas = document.querySelector("#qrcode canvas")
  if (qrCodeCanvas) {
    const downloadLink = document.createElement("a")
    downloadLink.href = qrCodeCanvas.toDataURL("image/png")
    downloadLink.download = "qrcode.png"
    downloadLink.click()
  } else {
    alert("No QR code generated yet.")
  }
})

shareBtn.addEventListener("click", () => {
  const url = input.value.trim()

  if (url) {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert("URL copied to clipboard!")
      })
      .catch((err) => {
        console.error("Failed to copy URL: ", err)
        alert("Failed to copy URL to clipboard.")
      })
  } else {
    alert("No URL entered to copy.")
  }
})
