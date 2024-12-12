import "./App.css"
import Header from "./components/Header/Header"
import Products from "./components/ProductList/ProductList"

function App() {
  return (
    <div className="w-full h-full relative bg-[var(--page-bg-clr)] pb-16">
      <div className="w-full h-[450px] bg-[url('/images/bg-cafe.jpg')] bg-cover"></div>
      <div className="w-full bg-[var(--wrapper-bg-clr)]  lg:max-w-[75%] text-blue-50 mt-[-17rem] m-auto rounded-md p-2">
        <Header />
        <Products />
      </div>
    </div>
  )
}

export default App
