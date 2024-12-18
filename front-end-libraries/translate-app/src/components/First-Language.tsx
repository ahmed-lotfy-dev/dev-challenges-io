import React, { useContext } from "react"
import { LanguageContext } from "../LanguageContext"

export default function FirstLanguage() {
  const {
    textToTranslate,
    firstLanguage,
    setFirstLanguage,
    secondLanguage,
    setTextToTranslate,
    setTranslatedText,
  } = useContext(LanguageContext)

  const handleTranslate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("Translation triggered")
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${textToTranslate}&langpair=${firstLanguage}|${secondLanguage}`
    )
    const data = await response.json()
    console.log(data.responseData.translatedText)
    setTranslatedText(data.responseData.translatedText)
  }

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFirstLanguage(event.target.value)
  }


  return (
    <div className="w-[85%] bg-[var(--1st-box-bg-clr)] rounded-3xl p-5 border-[0.5px] border-[var(--border-clr)]">
      <form onSubmit={handleTranslate} className="">
        <div className="flex items-center gap-4 ml-3 my-2">
          <p>Detect Language</p>
          <button
            className={`${
              firstLanguage === "en"
                ? "bg-[var(--active-bg-clr)] text-[var(--text-clr)] px-3 py-2 rounded-lg transition-all"
                : ""
            }`}
            type="button"
            onClick={(e) => {
              e.preventDefault()
              setFirstLanguage("en")
            }}
          >
            English
          </button>
          <button
            className={`${
              firstLanguage === "fr"
                ? "bg-[var(--active-bg-clr)] text-[var(--text-clr)] px-3 py-2 rounded-lg transition-all"
                : ""
            }`}
            type="button"
            onClick={(e) => {
              e.preventDefault()
              setFirstLanguage("fr")
            }}
          >
            French
          </button>
          <select
            className={`${
              firstLanguage === "ar" ||
              firstLanguage === "sp" ||
              firstLanguage === "gr"
                ? "bg-[var(--active-bg-clr)] text-[var(--text-clr)] px-3 py-2 rounded-lg transition-all"
                : "bg-transparent"
            }`}
            name="language"
            id="language"
            onChange={handleLanguageChange}
          >
            <option value="ar">Arabic</option>
            <option value="sp">Spanish</option>
            <option value="gr">German</option>
          </select>
        </div>
        <div className="relative">
          <span className="absolute bottom-0 right-0 mb-4">
            {textToTranslate.length}/500
          </span>
          <textarea
            className="w-full bg-transparent mt-3 border-t-[var(--border-clr)] border-t-[0.5px] pt-5 outline-none focus:border-[1px] focus:border-[var(border-clr)] resize-none pl-2"
            name="text"
            id="text"
            rows={8}
            placeholder={textToTranslate} // Use context value here
            value={textToTranslate}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
              setTextToTranslate(event.target.value)
            }
          ></textarea>
        </div>
        <div className="w-full flex justify-between">
          <div className="flex gap-3">
            <button className="border-2 px-2 h-10 border-[var(--border-clr)] rounded-xl">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.46532 11.6089C2.87114 10.6186 2.87114 9.38143 3.46532 8.39114C3.64663 8.08895 3.94701 7.87726 4.29258 7.80815L5.70344 7.52598C5.78749 7.50917 5.86326 7.46409 5.91814 7.39824L7.17085 5.89498C8.3534 4.47592 8.94468 3.76638 9.47234 3.95742C10 4.14846 10 5.07207 10 6.91928L10 13.0807C10 14.9279 10 15.8515 9.47234 16.0426C8.94468 16.2336 8.3534 15.5241 7.17085 14.105L5.91814 12.6018C5.86326 12.5359 5.78749 12.4908 5.70344 12.474L4.29258 12.1918C3.94701 12.1227 3.64663 11.9111 3.46532 11.6089Z"
                  fill="#4D5562"
                />
                <path
                  d="M12.1129 7.05373C12.8903 7.83111 13.329 8.88422 13.3333 9.9836C13.3376 11.083 12.9073 12.1395 12.1361 12.923"
                  stroke="#4D5562"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M15.5474 5.28596C16.7912 6.52977 17.493 8.21475 17.4999 9.97375C17.5069 11.7327 16.8183 13.4232 15.5844 14.6768"
                  stroke="#4D5562"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button className="border-2 px-2 h-10 border-[var(--border-clr)] rounded-xl">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6667 5.83334V5.83334C11.6667 5.36869 11.6667 5.13636 11.6282 4.94316C11.4704 4.14978 10.8502 3.52959 10.0569 3.37177C9.86366 3.33334 9.63133 3.33334 9.16668 3.33334H7.33334C5.44773 3.33334 4.50492 3.33334 3.91913 3.91913C3.33334 4.50492 3.33334 5.44773 3.33334 7.33335V9.16668C3.33334 9.63133 3.33334 9.86366 3.37177 10.0569C3.52959 10.8502 4.14978 11.4704 4.94316 11.6282C5.13636 11.6667 5.36869 11.6667 5.83334 11.6667V11.6667"
                  stroke="#4D5562"
                  strokeWidth="2"
                />
                <rect
                  x="8.33334"
                  y="8.33334"
                  width="8.33333"
                  height="8.33333"
                  rx="2"
                  stroke="#4D5562"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
          <button className="flex  py-3 px-6 bg-[var(--btn-bg-clr)] rounded-xl text-[var(--text-clr)] border-[1px] border-[var(--btn-border-clr)] cursor-pointer">
            <svg
              className="mr-3"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 20H18" stroke="#F9FAFB" strokeWidth="2" />
              <path d="M9 12H15" stroke="#F9FAFB" strokeWidth="2" />
              <path
                d="M7 17L10.1165 8.27376C10.9024 6.0734 11.2953 4.97321 12 4.97321C12.7047 4.97321 13.0976 6.07339 13.8835 8.27375L17 17"
                stroke="#F9FAFB"
                strokeWidth="2"
              />
            </svg>
            Translate
          </button>
        </div>
      </form>
    </div>
  )
}
