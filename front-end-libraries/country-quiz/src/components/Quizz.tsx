import { Dispatch } from "react"
import Question from "./Question"
import QuestionList from "./QuestionList"

export type QuestionType = {
  question: string
  correctAnswer: string
  answers: string[]
}

type QuizzTypeProps = {
  questions: QuestionType[]
  activeQuestion: number
  setActiveQuestion: Dispatch<React.SetStateAction<number>>
  setCorrectAnswers: Dispatch<React.SetStateAction<number>>
}

export default function Quizz({
  questions,
  activeQuestion,
  setActiveQuestion,
  setCorrectAnswers,
}: QuizzTypeProps) {
  return (
    <div className="bg-clr-3 rounded-lg pt-7">
      {activeQuestion < 9 && (
        <QuestionList questions={questions} activeQuestion={activeQuestion} />
      )}

      {questions.map((question, idx) => (
        <div key={idx}>
          <Question
            className={`font-bold py-7 text-xl ${
              activeQuestion === idx && activeQuestion < 9 ? "block" : "hidden"
            }`}
            question={question}
            setActiveQuestion={setActiveQuestion}
            setCorrectAnswers={setCorrectAnswers}
          />
        </div>
      ))}
      {activeQuestion === 9 && (
        <div className="w-full h-[330px] mt-20 flex justify-center ">
          <img
            src="../../public/congrats.svg"
            alt="quizz is finished congrats"
          />
        </div>
      )}
    </div>
  )
}
