const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Who is the Anemo archon?',
    answers: [
      { text: 'Zhongli', correct: false },
      { text: 'Venti', correct: true },
      { text: 'Ei', correct: false },
      { text: 'Nahida', correct: false }
    ]
  },
  {
    question: 'What are the names of the twins we play as?',
    answers: [
      { text: 'Spring and Autumn', correct: false },
      { text: 'Luna and Eclipse', correct: false },
      { text: 'Aether and Lumine', correct: true },
      { text: 'Aster and Dandelion', correct: false }
    ]
  },
  {
    question: 'How many Yakshas are appointed by Rex Lapis?',
    answers: [
      { text: '3', correct: false },
      { text: '4', correct: false },
      { text: '5', correct: true },
      { text: '7', correct: false }
    ]
  },
  {
    question: 'Yae Miko is an idol from Mondstadt.',
    answers: [
      { text: 'TRUE', correct: false },
      { text: 'FALSE', correct: true }
    ]
  },
  {
    question: 'How many nations are in the world of Teyvat?',
    answers: [
      { text: '7', correct: true },
      { text: '10', correct: false },
      { text: '15', correct: false },
      { text: '16', correct: false}
    ]
  },
  {
    question: 'Arataki Itto is the leader and founder of',
    answers: [
      { text: 'Ox Crew', correct: false },
      { text: 'Demon Rights Group', correct: false },
      { text: 'Beetle Fight Club', correct: false },
      { text: 'Arataki Gang', correct: true }
    ]
  },
  {
    question: 'You can harvest Dandelion Seed by using what element?',
    answers: [
      { text: 'Anemo', correct: true },
      { text: 'Electro', correct: false },
      { text: 'Cryo', correct: false },
      { text: 'Dendro', correct: false }
    ]
  },
  {
    question: 'The Raiden Shogun have a twin sister.',
    answers: [
      { text: 'TRUE', correct: true },
      { text: 'FALSE', correct: false }
    ]
  },
  {
    question: 'What rank is Dottore out of the eleven Fatui Harbingers?',
    answers: [
      { text: '1', correct: false },
      { text: '2', correct: true },
      { text: '4', correct: false },
      { text: '8', correct: false }
    ]
  },
  {
    question: 'Why do people like playing Genshin Impact?',
    answers: [
      { text: 'The compelling story', correct: true },
      { text: 'The fun gameplay', correct: true },
      { text: 'The amazing music', correct: true },
      { text: 'The endless exploration', correct: true }
    ]
  }
]
