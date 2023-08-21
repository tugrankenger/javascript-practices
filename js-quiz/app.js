const data = [
  {
    id: 1,
    question: 'What is your favourite color?',
    answers: [
      { answer: 'blue', isCorrect: true },
      { answer: 'red', isCorrect: false },
      { answer: 'orange', isCorrect: false },
      { answer: 'magenta', isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "Which is the largest city in the USA's largest state?",
    answers: [
      {
        answer: 'Dallas',
        isCorrect: false,
      },
      {
        answer: 'Los Angeles',
        isCorrect: false,
      },
      {
        answer: 'New York',
        isCorrect: false,
      },
      {
        answer: 'Anchorage',
        isCorrect: true,
      },
    ],
  },
  {
    id: 3,
    question: 'In which palace was Queen Elizabeth I born?',
    answers: [
      {
        answer: 'Greenwich',
        isCorrect: true,
      },
      {
        answer: 'Richmond',
        isCorrect: false,
      },
      {
        answer: 'Hampton Court',
        isCorrect: false,
      },
      {
        answer: 'Kensington',
        isCorrect: false,
      },
    ],
  },
  {
    id: 4,
    question: 'What is the Celsius equivalent of 77 degrees Fahrenheit?',
    answers: [
      {
        answer: '15',
        isCorrect: false,
      },
      {
        answer: '20',
        isCorrect: false,
      },
      {
        answer: '25',
        isCorrect: true,
      },
      {
        answer: '30',
        isCorrect: false,
      },
    ],
  },
];

const gameScreen = document.querySelector('.game');
const resultScreen = document.querySelector('.result');
const question = document.querySelector('.question');
const answersContainer = document.querySelector('.answers');
const submit = document.querySelector('.submit');
const play = document.querySelector('.play');
const infoTitle = document.querySelector('.infoTitle');

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playAgain = () => {
  qIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  total = 0;
  showQuestion(qIndex);
};

play.addEventListener('click', () => {
  resultScreen.style.display = 'none';
  gameScreen.style.display = 'block';
  playAgain();
});

const showResult = () => {
  resultScreen.style.display = 'block';
  gameScreen.style.display = 'none';
  resultScreen.querySelector(
    '.correct'
  ).textContent = `Correct Answers: ${correctCount}`;
  resultScreen.querySelector(
    '.wrong'
  ).textContent = `Wrong Answers: ${wrongCount}`;
  resultScreen.querySelector('.score').textContent = `Score: ${
    (correctCount - wrongCount) * 10
  }`;
  if ((correctCount - wrongCount) * 10 < 0) {
    infoTitle.textContent = 'Bad Score!';
  }
};

const showQuestion = (qNumber) => {
  if (qNumber === data.length) return showResult();
  selectedAnswer = null;
  question.textContent = data[qNumber].question;
  answersContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) => `
    <div class ="answer" >
      <input type = "radio" id= ${index} name="answer" value = ${item.isCorrect} />
      <label for = "1">${item.answer}</label>
    </div>
  `
    )
    .join('');
  selectAnswer();
};

const selectAnswer = () => {
  answersContainer.querySelectorAll('input').forEach((el) => {
    el.addEventListener('click', (e) => {
      selectedAnswer = e.target.value;
    });
  });
};

const submitAnswer = () => {
  submit.addEventListener('click', () => {
    if (selectedAnswer !== null) {
      selectedAnswer === 'true' ? correctCount++ : wrongCount++;
      console.log('correct: ', correctCount + 'wrong: ', wrongCount);
      qIndex++;
      showQuestion(qIndex);
    } else {
      alert('select an answer');
    }
  });
};

showQuestion(qIndex);
submitAnswer();
