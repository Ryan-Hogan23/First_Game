let getComputerchoice = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;


document.getElementById('Rock').addEventListener('click', function () {
    playGame('Rock')
});
document.getElementById('Paper').addEventListener('click', function () {
    playGame('Paper')
});
document.getElementById('Scissors').addEventListener('click', function () {
    playGame('Scissors')
});

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection){
        return 'It\'s a tie!';
    }
     else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
     ){
        playerScore++;
        return 'You Win! ' + playerSelection + ' beats ' + computerSelection + '!';
    }
    else {
        computerScore++;
        return 'You Lose! ' + computerSelection + ' beats ' + playerSelection + '!'; 
    }
}

function checkGameWinner(){
    if (playerScore > computerScore) {
        return 'Congratulation! You win the game!';
    }
    else if (computerScore > playerScore){
        return 'Computer wins this time!';
    }
    else {
        return 'It is a tie';
    }
    
}
function playGame(playerSelection){
    
    if (roundsPlayed >= 5 || playerScore === 5 || computerScore === 5){
       document.getElementById('result').textContent = 'Game Over ' + checkGameWinner();
       
    }
   else {
    roundsPlayed++;
    let computerSelection = getComputerchoice[Math.floor(Math.random() * getComputerchoice.length)]
    const result = playRound(playerSelection, computerSelection);
    document.getElementById('result').textContent = result;
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
}
}








