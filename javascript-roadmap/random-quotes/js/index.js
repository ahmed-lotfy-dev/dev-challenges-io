const authorElement = document.querySelector(".author")
const categoryElement = document.querySelector(".category")
const quoteElement = document.querySelector(".quote-text")
const newQuoteElement = document.querySelector(".new-quote")
const shareQuoteElement = document.querySelector(".share-quote")

let quote

async function fetchQuote() {
  try {
    const response = await fetch("https://api.quotable.io/quotes/random")
    const quoteData = await response.json()
    quote = quoteData[0]
  } catch (error) {
    quote.content = `no quote there cannot fetch quote data`
    console.log(error)
  }
}

function createElements() {
  if (!quote) {
    quoteElement.innerHTML = `
    <p>
    <span>&ldquo;</span>
    No Quote To Show At The Moment
    <span>&rdquo;</span>
    </p>
    `
  }
  authorElement.innerHTML = `<h1>${quote.author}</h1>`
  quote.tags.forEach((tag) => {
    categoryElement.innerHTML = `<p>${tag}</p>`
  })
  quoteElement.innerHTML = `
  <p>
  <span>&ldquo;</span>
  ${quote.content}
  <span>&rdquo;</span>
  </p>
  `
}
document.addEventListener("DOMContentLoaded", async () => {
  await fetchQuote()
  createElements()
})
newQuoteElement.addEventListener("click", async () => {
  await fetchQuote()
  createElements()
})
shareQuoteElement.addEventListener("click", () => {
  navigator.clipboard.writeText(quote.content)
  alert("Quote Copied Successfully now share it to your social media")
})
