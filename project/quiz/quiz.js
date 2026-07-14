let start_screen = document.querySelector('#start_screen');
let quiz_screen = document.querySelector('#quiz_screen');
let start_button_btn = document.querySelector("#start_button");
let question_btn = document.querySelector(".question");
let start_question_btn = document.querySelector(".start_question");
let final_question_btn = document.querySelector(".final_question");
let answer_container_btn = document.querySelector("#answer_container");

let currentquestionindex = 0;
let score = 0;
let answersDisabled = false;



const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  }
];

final_question_btn.textContent = quizQuestions.length;




start_button_btn.addEventListener("click", () => {
    currentquestionindex = 0;
    score = 0;

    start_screen.classList.toggle("active");
    quiz_screen.classList.toggle("active");

    showquestion();
});


function showquestion() {
    answersDisabled = false;

    let currentquestion = quizQuestions[currentquestionindex];
    start_question_btn.textContent = currentquestionindex + 1;

    question_btn.textContent = currentquestion.question;

    answers_Container_btn.innerHTML = "";

    currentquestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answer-btn");

        button.dataset.correct = answer.correct;

        button.addEventListener("click", selectAnswer);

        answers_Container_btn.appendChild(button);
    });
}
