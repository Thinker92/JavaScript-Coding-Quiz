// Declaring DOM elements
const body = document.querySelector("body");
const startScreen = document.querySelector(".startScreen");
const questionsEl = document.querySelector("#questions");
const endScreen = document.querySelector(".endScreen");
const startBtn = document.querySelector("#start")
const viewHighScore = document.querySelector("#viewScores");
const clearHighScore = document.querySelector("#clearScores");
const timer = 75;
const questionIndex = 0;
const score = 0;



startBtn.addEventListener("click", startQuiz);
viewHighScore.addEventListener("click", viewHighScores);
clearHighScore.addEventListener("click", clearHighScores);


function startQuiz() {
    event.preventDefault();
    console.log("Start Clicked")
    // Hide .startscreen
    // (LOOP) Display first question
    // Display answers
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


