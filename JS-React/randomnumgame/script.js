let randomNumber = parseInt(Math.random() * 100 + 1);
/* console.log(randomNumber); */

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const createP = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;

//is user available for playing game
if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        const guessNum = parseInt(userInput.value);
        validateGuess(guessNum);
    })
}

function validateGuess(guess) {
    if (guess < 0 || guess === "" || isNaN(guess)) {
        console.log('not a valid number');
        userInput.value = '';
        alert('not a valid number')
    } else if (guess > 100 || guess < 1) {
        userInput.value = '';
        alert('number range between 1 - 100')
    } else {
        prevGuess.push(guess);
        if (numGuess === 10) {
            cleanUpGuess(guess)
            displayMessage(`Game Over, random number was ${randomNumber}`)
            endGame()
        } else {
            cleanUpGuess(guess)
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('You guess it right');
        endGame()
    } else if (guess < randomNumber) {
        displayMessage('Number is too low');
    } else if (guess > randomNumber) {
        displayMessage('Number is too High')
    }
}

function cleanUpGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} , `;
    remaining.innerHTML = `${10 - numGuess}`
    numGuess++;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `${message}`
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    submit.setAttribute('disabled', '');
    createP.classList.add('button');
    createP.innerHTML = `<h1 id="newGame">Start new game</h1>`;
    startOver.appendChild(createP);
    playGame = false;
    newGame()
}

function newGame() {
    const newGame = document.getElementById('newGame');
    newGame.addEventListener('click', function () {
        randomNumber = parseInt(Math.random() * 100 + 1);
        userInput.removeAttribute('disabled');
        submit.removeAttribute('disabled');
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        startOver.removeChild(createP);
        playGame = true;
    })
}