import { Dispatch, useState } from "react"
import { QuestionType } from "./Quizz"
import CorrectSvg from "/Check_round_fill.svg"
import WrongSvg from "/Close_round_fill.svg"

type QuestionTypeProps = {
  question: QuestionType
  setActiveQuestion: Dispatch<React.SetStateAction<number>>
  setCorrectAnswers: Dispatch<React.SetStateAction<number>>
  className: string
}

export default function Question({
  question,
  setActiveQuestion,
  setCorrectAnswers,
  className,
}: QuestionTypeProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)

  const handleAnswers = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement
    const answer = target.innerText
    setSelectedAnswer(answer.toString())
    const isCorrect = question.correctAnswer === answer

    setTimeout(() => {
      setActiveQuestion((prev) => prev + 1)
      if (isCorrect) {
        setCorrectAnswers((prev) => prev + 1)
      }
    }, 1500)
  }

  return (
    <div className={className}>
      <div>
        <h2>{question.question}</h2>
      </div>
      {question.answers.map((answer, idx) => (
        <div key={idx} className="flex flex-col last:mb-6 mt-3 px-4">
          <button
            onClick={handleAnswers}
            className={`bg-clr-1 rounded-xl cursor-pointer py-4 font-bold `}
          >
            <div className="flex ml-2 justify-center items-center gap-3">
              {answer}
              {selectedAnswer == answer &&
                selectedAnswer != question.correctAnswer && (
                  <img src={WrongSvg} alt="wrong answer" />
                )}
              {selectedAnswer != null && answer == question.correctAnswer && (
                <img src={CorrectSvg} alt="right answer" />
              )}
            </div>
          </button>
        </div>
      ))}
    </div>
  )
}
