type Props = { correctAnswers: number }

export default function Heading({ correctAnswers }: Props) {
  return (
    <div className="w-full flex items-center justify-between">
      <h1 className="text-3xl font-bold">Country Quizz</h1>
      <p className="font-bold rounded-2xl bg-gradient-secondary px-4 py-[3px] text-white">
        <span className="pr-2">🏆</span> {correctAnswers}/10 Points
      </p>
    </div>
  )
}
