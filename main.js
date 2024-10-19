//logic to get computer choice.
let getComputerChoice = () => {
    let numChoice = Number(Math.floor(Math.random()*3));
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[numChoice];
    return computerChoice;
}


//logic to get valid human/user choice

let getHumanChoice = () => {
    let userInput = prompt("Enter you choice here please: ","").toLowerCase();
    
    if(userInput == "rock" || userInput == "paper" || userInput == "scissors"){
        return userInput;
    } else{
        return "invalid choice, try again later!";
    }
}

//declaring and initialising score variables.
let humanScore, computerScore;
humanScore = 0;
computerScore = 0;

//logic for playing a single perfect round.

let playRound = (x, y) => {
    if(x === y){
        return `its a DEAD HIT,\n${x} against ${y}`;
    } else if(x === "rock" && y === "scissors"){
        humanScore++;
        return `you WIN! rock beats scissors`;
    } else if(x === "paper" && y === "rock"){
        humanScore++;
        return `you WIN! paper beats rock`;
    } else if(x === "scissors" && y === "paper"){
        humanScore++;
        return `you WIN! scissors beats paper`;
    } else if(y === "scissors" && x === "paper"){
        computerScore++;
        return `you LOSE! scissors beats paper`;
    } else if(y === "paper" && x === "rock"){
        computerScore++;
        return `you LOSE! paper beats rock`
    } else if(y === "rock" && x === "scissors"){
        computerScore++;
        return `you LOSE! rock beats scissors`
    } else{
        return `Game ABORTED`;
    }
}



//logic to play the entire game of 5 rounds using the 'for' loop

for(let i = 1; i<=5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(`ROUND: ${i}, ${playRound(humanSelection, computerSelection)}`);
    console.log(`COMPUTER CHOOSES: ${computerSelection} --- YOU CHOOSE: ${humanSelection}`);
}

//logic for finding the winner using the humanScore and computerScore variables

if(humanScore > computerScore){
    console.log(`You WIN!\n ${humanScore} against ${computerScore}`);
}else if(humanScore < computerScore){
    console.log(`Computer WINS!\n ${humanScore} against ${computerScore}`);
} else{
    console.log(`You TIE: \n ${humanScore} against ${computerScore}`);
}
