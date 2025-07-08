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

function getHumanChoice() {
    let input = prompt ("Rock, Paper or Scissors?");
    return input;
}

// console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie!");
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        humanScore++;
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
    } else {
        computerScore++;
        console.log(`You Lose!  ${computerChoice} beats ${humanChoice}`)
    }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log("Game over!");
  console.log(`Final Score — Human: ${humanScore}, Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("You win the game! 🎉");
  } else if (computerScore > humanScore) {
    console.log("You lose the game! 😢");
  } else {
    console.log("The game is a tie! 🤝");
  }
}

playGame();
//console.log(`Score — Human: ${humanScore}, Computer: ${computerScore}`);
