function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);

    if(randNum == 0) {
        return "rock";
    } else if(randNum == 1) {
        return "paper";
    } else {
        return "scissors";
    }
    
}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper or scissors: ");

    return choice;
    
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        let result = "";

        if((humanChoice == "rock" && computerChoice == "scissors")
        || (humanChoice == "scissors" && computerChoice == "paper")
        || (humanChoice == "paper" && computerChoice == "rock")) {
            result = "You win!";
        } else if((computerChoice == "rock" && humanChoice == "scissors")
        || (computerChoice == "scissors" && humanChoice == "paper")
        || (computerChoice == "paper" && humanChoice == "rock")) {
            result = "You lose!";
        } else {
            result = "Draw";
        }

        switch (result) {
            case "You win!":
                humanScore++;
                return result;
                break;
            case "You lose!":
                computerScore++;
                return result;
                break;
            default:
                return result;
                break;
        }

    }

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));

    console.log(`Your score: ${humanScore} \nComputer score: ${computerScore}`);

}


playGame();