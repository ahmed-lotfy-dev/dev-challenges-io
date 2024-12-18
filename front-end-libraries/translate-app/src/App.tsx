import "./App.css"
import logoImage from "./assets/logo.svg"
import heroImage from "./assets/hero_img.jpg"
import Language from "./components/Language"

function App() {
  return (
    <div className="relative h-full w-full bg-[var(--page-bg-clr)] text-[var(--border-clr)] font-bold">
      <img
        src={heroImage}
        alt=""
        className="absolute w-full h-[450px] object-cover"
      />
      <div className="absolute w-full h-full items-center">
        <div className="flex flex-col gap-4 justify-center items-center w-full h-full">
          <img
            src={logoImage}
            alt="Logo Image ranslated.io"
            className="lg:col-span-2"
          />
          <div className="grid grid-cols-12 gap-10 w-full px-14 p-5">
          <Language main={true} />
          <Language />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
