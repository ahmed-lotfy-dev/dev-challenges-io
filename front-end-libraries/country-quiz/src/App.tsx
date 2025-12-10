import { useEffect, useState } from "react"
import "./App.css"
import Quizz from "./components/Quizz"
import Heading from "./components/Heading"
import { useCountries } from "./lib/api/countries"
import { generateQuestions } from "./lib/utils/generateQuestion"

function App() {
  const [questions, setQuestions] = useState<any[]>([])
  const [correctAnswers, setCorrectAnswers] = useState<number>(0)
  const [activeQuestion, setActiveQuestion] = useState<number>(0)
  const countriesQuery = useCountries()

  useEffect(() => {
    if (countriesQuery.data) {
      const newQuestions = generateQuestions(countriesQuery.data)
      setQuestions(newQuestions)
    }
  }, [])
  return (
    <div className="w-full h-full flex flex-col justify-center gap-10 max-w-3xl m-auto text-white px-6">
      {activeQuestion < 9 && <Heading correctAnswers={correctAnswers} />}
      <Quizz
        questions={questions}
        activeQuestion={activeQuestion}
        setActiveQuestion={setActiveQuestion}
        setCorrectAnswers={setCorrectAnswers}
      />
    </div>
  )
}

export default App
