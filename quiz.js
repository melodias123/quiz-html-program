console.const quizContainer=document.getElementById("quiz")
const submitButton=document.getElementById("submit")
const resultContainer=document.getElementById("result")
log(quizContainer)
const questions = [
  {
    question: 'What does HTML stand for?',
    answers: {
      a: 'Hyper Text Markup Language',
      b: 'Hyperlinks and Text Markup Language',
      c: 'Home Tool Markup Language'
    },
    correctAnswer: 'a'
  },
  {
    question: 'Which tag is used to create a hyperlink?',
    answers: {
      a: '<a>',
      b: '<link>',
      c: '<h1>'
    },
    correctAnswer: 'a'
  }
];

function buildQuiz(){
const output=[];
questions.forEach((currentQuestion, questionNumber) => {
    const answers = [];

    for (const letter in currentQuestion.answers) {
      answers.push(
        `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter}: ${currentQuestion.answers[letter]}
        </label>`
      );
    }

    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join('')} </div>`
    );
  });
quizContainer.innerHTML=output.join('');
}

buildQuiz()