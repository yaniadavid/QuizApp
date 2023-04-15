console.log("Iniciando");

const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = {};

let questions = [
    {
        question: "This is the Question 1?",
        choice1: "<choice1>",
        choice2: "<choice2>",
        choice3: "<choice3>",
        choice4: "<choice4>",
        answer:1
    },
    {
        question: "This is the Question 2?",
        choice1: "<choice1>",
        choice2: "<choice2>",
        choice3: "<choice3>",
        choice4: "<choice4>",
        answer:2
    },
    {
        question: "This is the Question 3?",
        choice1: "<choice1>",
        choice2: "<choice2>",
        choice3: "<choice3>",
        choice4: "<choice4>",
        answer:3
    }
];

/* CONSTANTS */
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
        return window.location.assign("end.html");
    }

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
            const number = choice.dataset['number'];
            choice.innerText = currentQuestion['choice' + number];

        }
    );

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
}

choices.forEach(choices => {
    choices.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        console.log(selectedAnswer);
        getNewQuestion();
    });
});

startGame();