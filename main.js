
const VALID_PLAYS = ["rock", "paper", "scissors"];
const CURRENT_SCORE = [0, 0];
function computerPlay() {
    return VALID_PLAYS[Math.floor(Math.random() * VALID_PLAYS.length)];
}

function displayScore(str) {
    const currentScore = document.createElement('p');

    if(CURRENT_SCORE[0] === 5) {
        currentScore.textContent = `${str}. You win!`
    } else if (CURRENT_SCORE[1] === 5) {
        currentScore.textContent = `${str}. Computer wins!`;
    } else {
        currentScore.textContent = `${str}, Human: ${CURRENT_SCORE[0]}, Computer: ${CURRENT_SCORE[1]}`
    }

    result.appendChild(currentScore);
}

function playRound(e) {
    let computerSelection = computerPlay().toLowerCase();
    let playerSelection = e.target.value;
    //Checking for a tie
    if (playerSelection === computerSelection) {
        displayScore(`You both choose ${computerSelection}. It's a tie`);
    } else {

        //Checking for rock
        if (playerSelection === "rock") {
            if (computerSelection === "scissors") {
                ++CURRENT_SCORE[0];
                displayScore("Rock beats scissors");
            } else {
                ++CURRENT_SCORE[1];
                displayScore("Paper beats rock");
            }
        }

        //Checking for paper
        if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                ++CURRENT_SCORE[0];
                displayScore("Paper beats rock");
            } else {
                ++CURRENT_SCORE[1];
                displayScore("Scissors beats paper");
            }
        }

        //Checking for scissors
        if (playerSelection === "scissors") {
            if (computerSelection === "paper") {
                ++CURRENT_SCORE[0];
                displayScore("Scissors beats paper");
            } else {
                ++CURRENT_SCORE[1];
                displayScore("Rock beats scissors");
            }
        }
    }
}

const result = document.querySelector('.result');
const choices = Array.from(document.querySelectorAll('.player-choice'));
choices.forEach(choice => {
    choice.addEventListener('click', playRound);
});
