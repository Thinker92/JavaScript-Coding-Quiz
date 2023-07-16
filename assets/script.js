// Declaring DOM elements
let body = document.querySelector("body");
let startScreen = document.querySelector(".startScreen");
let questionsEl = document.querySelector("#questions");
let endScreen = document.querySelector("#end-screen");
let startBtn = document.querySelector("#start")
let viewHighScore = document.querySelector("#viewScores");
let clearHighScore = document.querySelector("#clearScores");
let timer = 75;
let questionIndex = 0;
let score = 0;
let timerInterval;




startBtn.addEventListener("click", startQuiz);
viewHighScore.addEventListener("click", viewHighScores);
// clearHighScore.addEventListener("click", clearHighScores);


function startQuiz() {
    event.preventDefault();
    console.log("Start Clicked")
    // Hide .startscreen
    startScreen.style.display = 'none';
    // Show questions element
    questionsEl.style.display = 'block';

    // Start Timer
    timerInterval = setInterval(function() {
        timer --;
        document.getElementById('time').textContent = timer; 
        if (timer <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    },1000);

    displayQuestion();

    

    // Event listener(s) for answers 
    // Save score - correct vs incorrect
}

function viewHighScores() {
    event.preventDefault();
    console.log("High Score Button")
}

function clearHighScores() {
    event.preventDefault();
    console.log("Clear Score Button")
}

function endQuiz() {
    console.log('endQuiz Reached')
    // Stop Timer
    clearInterval(timerInterval);
    // Hide questionEl
    questionsEl.style.display = 'none';
    // show end screen 
    endScreen.style.display = 'block';
    // show final score
    document.getElementById('final-score').textContent = timer;
    
}

function displayQuestion() {
    console.log('Display Question')
    // Empty any old data
    document.getElementById('question-title').innerHTML = '';
    document.getElementById('choices').innerHTML = '';
    // Get the current question
    let currentQuestion = questions[questionIndex]; 

    //  Add the question title
    document.getElementById('question-title').innerHTML = currentQuestion.title;

    //  Add the answers to the page 
    currentQuestion.choices.forEach(function(choice,i){
        let choiceButton = document.createElement('button');
        choiceButton.setAttribute('class', 'choice');
        choiceButton.setAttribute('value', choice);
        choiceButton.innerHTML = i + 1 + ". " + choice;
        choiceButton.onclick = questionClick;
        document.getElementById('choices').appendChild(choiceButton);
    })
}

function questionClick() {
    // check if answer is correct
    if (this.value !== questions[questionIndex].answer){
        // Subtract time
        timer -= 10;

        if (timer < 0){
            timer = 0;
        }

        // display new time
        document.getElementById('time').textContent = timer;
    }
    // Move on to next question
    questionIndex++;

    // Check if all questions answered
    if (questionIndex === questions.length) {
        endQuiz();
    } else {
        displayQuestion();
    }

}

let questions = [
    {
        title: "Question 1: Which operator is used to assign a value to a variable in JavaScript?",
        choices: ["=","==","===","!"],
        answer: "="
    },
    {
        title: "Question 2: How do you declare a function in Javascript?",
        choices: ["function myFunction()","function:myFunction()","function = myFunction()","myFunction()"],
        answer: "function myFunction()"
    },
  
];