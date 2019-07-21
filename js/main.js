const modal = document.querySelector('.modal');
const score = document.querySelector('#score');
const choices = document.querySelectorAll('.choice');
const result = document.getElementById('result');
const start = document.getElementById('Start');
const restart = document.getElementById('restart')
const startNotice = document.getElementById('notice-Start')


const scoreBoard = {
    player: 0,
    Computer: 0
};

// play function

function play(){
// to   add intervall
startNotice.style.display = ' block';
setTimeout(()=>startNotice.style.display= 'none', 1000)

    const beginGame = begin()
   

}


// BEGIN GAME

function begin(e){
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    // console.log(playerChoice, computerChoice, winner);
    const display =showWinner(winner, computerChoice);
   
    score.innerHTML = ` <p> Player: ${scoreBoard.player}</p>
        <p> Computer: ${scoreBoard.Computer}</p>
    `

    
   



}

// getComputerChoice 

function getComputerChoice(){
    const rand = Math.random();
    if (rand < 0.34) {
        return 'rock';
    } else if (rand <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}


// getWinner 
function getWinner(p, c){
   
    if (p === c) {
        return 'draw'
    } else if (p === 'rock') {
        if (c === 'paper') {
            return 'computer'
        } else {
            return 'player';
        }

    } else if (p === 'paper') {
        if (c === 'scissors') {
            return 'computer'
        } else {
            return 'player'
        }

    }
    else if (p === 'scissors') {
        if (c === 'rock') {
            return 'computer';
        } else {
            return 'player';
        }
    }
}


// display winner

function showWinner(winner, computerChoice){
    if(winner==='player'){
        scoreBoard.player++;
        result.innerHTML = `
        <h1 class="text-win"> You Win</h1>
        <span class="fas fa-hand-${computerChoice} fa-10x"> </span>
        <p> Computer Chose  <strong>${computerChoice}</strong></p>
        `
    }else if(winner==='computer'){
        scoreBoard.Computer++;
        result.innerHTML = ` 
        <h1 class="text-lose"> You Loose</h1>
                <span class="fas fa-hand-${computerChoice} fa-10x"> </span>

        <p> Computer Chose  <strong>${computerChoice}</strong></p>

        
        
        `


    }else{


        result.innerHTML = `
    <h1> A Draw </h1>
    <i class="fas fa-hand-${computerChoice} fa-10x> </i>
    <p> Computer Chose <strong> ${computerChoice}</strong></p>
    
    `;
    }





    modal.style.display = ` block`;
 


}




// clearMOdal
function clearModal(e){
    if(e.target==modal){
        modal.style.display = ' none';
    }
}

function restartGame(){
    scoreBoard.player = 0;
    scoreBoard.Computer = 0;
    score.innerHTML = `
    <p> Player:0</p>
    <p> Computer : 0</p>
    `

}


// Event listeners 

start.addEventListener('click', play);
choices.forEach((choice)=> choice.addEventListener('click', begin))
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);

