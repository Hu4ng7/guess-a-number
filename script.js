'use strict';

let score = 20;
let highscore = 0;

const changeText = function(className, message) {
    document.querySelector("." + className).textContent = message
}

let secretNumber = Math.trunc(Math.random() * 20) + 1;
changeMessage("number", "?");

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if(!guess) {
        changeMessage("message", "🚫 No number");
    }
    
    else if(guess === secretNumber) {
        changeMessage("message", "🎉 Correct Number!");
        document.body.style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = "30rem";
        changeMessage("number", secretNumber);
        if (score > highscore) {
            highscore = score;
            changeMessage("highscore", highscore)
        }
    }
    
    else if(guess !== secretNumber) {
        if(score > 1) {
            changeMessage("message", guess > secretNumber ? "📈 Too high" : "📉 Too low");
            score--;
            changeMessage("score", score)
        }
        else {
            changeMessage("message", "💥 You lose the game.");
            changeMessage("score", 0);
            document.body.style.backgroundColor = "red";
        }
    } 
})


document.querySelector('.again').addEventListener('click', ()=> {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20
    changeMessage("score", score)
    changeMessage("number", "?");
    document.body.style.backgroundColor = "#222";
    document.querySelector('.number').style.width = "15rem";
    changeMessage("message", "Start guessing...");
    document.querySelector('.guess').value = "";
})
