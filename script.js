let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (guess, secret) => {
    return Math.abs(guess - secret);
}

const compareGuesses = (human, computer, secret) => {
    if (getAbsoluteDistance(human, secret) < getAbsoluteDistance(computer, secret)) {
        return true;
    } else if (getAbsoluteDistance(human, secret) > getAbsoluteDistance(computer, secret)) {
        return false;
    } else if (getAbsoluteDistance(human, secret) === getAbsoluteDistance(computer, secret)) {
        return true;
    }
}

const updateScore = winner => winner === 'human' ? humanScore++ : computerScore++;

const advanceRound = () => currentRoundNumber++;