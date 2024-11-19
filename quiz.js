const quizForm = document.getElementById('quiz-form');
const submitBtn = document.getElementById('submit-btn');
const resultsDiv = document.getElementById('results');

const questions = [
    {
        question: 'What is the capital of France?',
        answers: ['Paris', 'London', 'Berlin'],
        correct: 'Paris'
    },
    {
        question: 'Who is the founder of Microsoft?',
        answers: ['Bill Gates', 'Steve Jobs', 'Mark Zuckerberg'],
        correct: 'Bill Gates'
    },
    {
        question: 'What is the largest planet in our solar system?',
        answers: ['Jupiter', 'Earth', 'Saturn'],
        correct: 'Jupiter'
    }
];

let score = 0;

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const userAnswers = [];
