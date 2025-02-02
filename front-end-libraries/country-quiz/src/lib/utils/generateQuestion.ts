export function generateQuizz(data: any) {
  console.log(data)
  const randomCountry = data[Math.floor(Math.random() * data.length)]
  console.log(randomCountry)
}

export function generateRandomType() {
  const types = ["capital", "population", "flag"]
  return types[Math.floor(Math.random() * types.length)]
}

export function generateQuestion(type: string, data: any) {
  if (!data || data.length === 0) {
    return "No Data Countries Found"
  }
  

  const randomCountry = data[Math.floor(Math.random() * data.length)]
  const correctAnswer = randomCountry[type].toString()
  const answers: (string | number)[] = []
  while (answers.length < 3) {
    const randomIndex = Math.floor(Math.random() * data.length)
    const randomAnswer = data[randomIndex][type]
    if (randomAnswer !== correctAnswer && !answers.includes(randomAnswer)) {
      answers.push(randomAnswer)
    }
  }
  answers.push(correctAnswer)
  shuffleArray(answers)

  let question
  switch (type) {
    case "capital":
      question = `What is the capital of ${randomCountry.name?.common} ?`
      break
    case "population":
      question = `What is the population of ${randomCountry.name?.common} ?`
      break
    case "flag":
      question = `Which country does this flag ${randomCountry.flag} belong to ?`
      break
    default:
      return "Invalid question type"
  }

  return {
    question,
    correctAnswer,
    answers,
  }
}

const shuffleArray = <T>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5)
}
