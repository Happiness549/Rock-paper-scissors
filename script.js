function getComputerChoice () {
    let randomNumber = 
    Math.floor(Math.random() *3);

    if(randomNumber === 0) {
        return "rock"; 
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors"
    
    }
}

function getHumanChoice () {
    let choice = prompt("enter rock, paper, or scissors").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice ==="scissors") {
        return choice;
    } else {
        console.log("invalid choice! plaese enter rock, paper or scissors.");
        return getHumanChoice();
    }

}