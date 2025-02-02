import { QuestionType } from "./Quizz"

type Props = {
  questions: QuestionType[]
  activeQuestion: number
}

export default function QuestionList({ questions, activeQuestion }: Props) {
  return (
    <div className="flex gap-2 justify-center">
      {questions.map((_, idx) => (
        <p
          key={idx}
          className={`${
            activeQuestion >= idx && "bg-gradient-secondary"
          } bg-clr-1 rounded-full w-10 h-10 flex items-center justify-center`}
        >
          {idx + 1}
        </p>
      ))}
    </div>
  )
}
