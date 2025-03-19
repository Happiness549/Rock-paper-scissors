const score = {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElememnt();

function playGame (playerMove) {
    const computerChoice = pickComputerChoice ();
    
    let result = '';

    if(playerMove ==='scissors') {
        if(computerChoice === `rock`){
    result = `You lose.`;
} else if (computerChoice === `paper`) {
    result = `You win.`;
} else if (computerChoice === `scissors`) {
    result `Tie.`; 
}

} else if (playerMove === 'paper') {
    if(computerChoice === 'rock'){
    result = `You win.`;
} else if (computerChoice === 'paper') {
    result = `Tie.`;
} else if (computerChoice === 'scissors') {
    result `You lose.`;
}

} else if (playerMove ==='rock'){
    if(computerChoice === `rock`){
    result = `Tie.`;
} else if (computerChoice === 'paper') {
    result = `You lose.`;
} else if (computerChoice === 'scissors') {
    result `You win.`;
}
}

alert(`You picked ${playerMove}.
    Computer picked ${computerChoice}. 
    ${result}`);
   
}



     function playGame (playerMove) {
    const computerChoice = pickComputerChoice ();
    
    let result = '';

    if(playerMove ==='scissors') {
        if(computerChoice === 'rock'){
    result = 'You lose.';
} else if (computerChoice === 'paper') {
} else if (computerChoice === `scissors`) {
    result = 'Tie.';
}

} else if (playerMove === 'paper') {
    if(computerChoice === 'rock'){
    result = 'You win.';
} else if (computerChoice === 'paper') {
    result = 'Tie.'
} else if (computerChoice === 'scissors') {
    result = 'You lose.'
}

} else if (playerMove ==='rock'){
    if(computerChoice === `rock`){
    result = 'Tie.';
} else if (computerChoice === 'paper') {
    result = 'You lose.';
} else if (computerChoice === 'scissors') {
    result = 'You win.';
}
}

if (result === 'You win.') {
    score.wins  += 1;

} else if (result === 'you lose.') {
    score.losses += 1;

} else if (result === 'Tie.') {
    score.ties += 1;
}

localStorage.setItem('score',JSON.stringify(score));

updateScoreElememnt();

document.querySelector(".js-result").innerHTML = result;

document.querySelector(".js-moves").innerHTML = `You ${playerMove} - ${computerChoice} computer`;

};

function updateScoreElememnt () {
    document.querySelector(".js-score")
.innerHTML = `Wins: ${score.wins}, losses: 
${score.losses}, Ties: ${score.ties}`

};

function pickComputerChoice () {
    const randomNumber = Math.random();

    let computerChoice = '';
if(randomNumber >= 0 && randomNumber < 1/3){
     computerChoice = 'rock';


    } else if (randomNumber >1/3  && randomNumber <2/3) {
computerChoice = 'paper';

} else if(randomNumber >= 2/3 && randomNumber <1 ) {
 computerChoice = 'scissors';
}

return computerChoice;
}

