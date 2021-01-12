'use strict'

let input = document.querySelector('.guess')
let message = document.querySelector('.message')
let checkButton = document.querySelector('.check')
let number = document.querySelector('.number')
let score = document.querySelector('.score')
let highScore = document.querySelector('.highscore')
let again = document.querySelector('.again')

let randomNumber = Number(Math.trunc(Math.random()*20 + 1))
console.log(typeof(randomNumber))


let scoreValue = 20;
let highScoreValue = 0;

checkButton.addEventListener('click', function(){
    let guessedNumber = Number(document.querySelector('.guess').value)
    console.log(guessedNumber)

    if(!guessedNumber){
        message.textContent = "No number"; 
    }

    else if(guessedNumber === randomNumber){
        if(scoreValue > highScoreValue){
            highScoreValue = scoreValue
            highScore.textContent = highScoreValue
        }
        number.textContent = randomNumber
        message.textContent =  `You guessed it!!`;
        return;
        
    }

    else if(guessedNumber < randomNumber){
        message.textContent =  `Go up`;
        scoreValue--;
    }
    else{
        message.textContent = `Go down`;
        scoreValue--;
    }

    if(scoreValue == 0){
        message.textContent = "You lost! Play again";
        score.textContent = 0;
        checkButton.disabled = true
        input.value = '';
        return;
    }

    score.textContent = scoreValue;
})

again.addEventListener('click', function(){

    message.textContent = "Start guessing...";
    number.textContent = "?";
    randomNumber = undefined;
    scoreValue = 20;
    score.textContent = scoreValue;
    highScore.textContent = highScoreValue;
})
