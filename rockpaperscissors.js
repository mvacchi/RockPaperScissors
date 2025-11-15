let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);

    if (random === 0) {
            return "Rock";
        } else if (random === 1) {
            return "Paper";
        } else {
            return "Scissors";
        }
}

//function getHumanChoice() {
//    let input = prompt ("Rock, Paper or Scissors?");
//    return input;
//}

// console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `Tie! You both chose ${humanChoice}`;
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        humanScore++;
        return `You Win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You Lose!  ${computerChoice} beats ${humanChoice}`;
    }
}

//function playGame() {
//  for (let i = 0; i < 5; i++) {
//    const humanSelection = getHumanChoice();
//    const computerSelection = getComputerChoice();
//    playRound(humanSelection, computerSelection);
//  }

//  console.log("Game over!");
//  console.log(`Final Score — Human: ${humanScore}, Computer: ${computerScore}`);

//  if (humanScore > computerScore) {
//    console.log("You win the game! 🎉");
//  } else if (computerScore > humanScore) {
//  console.log("You lose the game! 😢");
//  } else {
//    console.log("The game is a tie! 🤝");
//  }
//}

//playGame();
//console.log(`Score — Human: ${humanScore}, Computer: ${computerScore}`);

// DOM Selectors
// DOM Slectors
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resultsDiv = document.querySelector('#results');

rockBtn.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  const roundResult = playRound('Rock', computerChoice);

  resultsDiv.textContent = `${roundResult} | Score - You: ${humanScore}, Computer: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    const winner =
      humanScore === 5 ? `You won!` : `You lost :(`;
    resultsDiv.textContent += ` | ${winner}`;

    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
});

paperBtn.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  const roundResult = playRound('Paper', computerChoice);

  resultsDiv.textContent = `${roundResult} | Score - You: ${humanScore}, Computer: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    const winner =
      humanScore === 5 ? `You won!` : `You lost :(`;
    resultsDiv.textContent += ` | ${winner}`;

    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
});

scissorsBtn.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  const roundResult = playRound('Scissors', computerChoice);

  resultsDiv.textContent = `${roundResult} | Score - You: ${humanScore}, Computer: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    const winner =
      humanScore === 5 ? `You won!` : `You lost :(`;
    resultsDiv.textContent += ` | ${winner}`;

    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
});

