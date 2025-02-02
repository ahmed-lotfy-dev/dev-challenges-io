import { useEffect, useState } from "react"
import "./App.css"
import {
  generateQuestion,
  generateRandomType,
} from "./lib/utils/generateQuestion"
import Quizz from "./components/Quizz"
import Heading from "./components/Heading"
import { useCountries } from "./lib/api/countries"

function App() {
  const [questions, setQuestions] = useState<any[]>([])
  const [correctAnswers, setCorrectAnswers] = useState<number>(0)
  const [activeQuestion, setActiveQuestion] = useState<number>(0)
  const countriesQuery = useCountries()
  console.log(countriesQuery.data)
  const localCountries = JSON.parse(localStorage.getItem("countries") || "[]")
  useEffect(() => {
    const newQuestions = []
    for (let index = 0; index < 10; index++) {
      const randomType = generateRandomType()
      const question = generateQuestion(randomType, localCountries)
      newQuestions.push(question)
    }
    setQuestions(newQuestions)
  }, [])
  console.log(questions)
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
