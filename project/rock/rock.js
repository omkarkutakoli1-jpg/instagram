let win = document.querySelector('.win');
let win_lose_tie = document.querySelector('.win_lose_tie');
let computer = document.querySelector('.computer'); 
let Rest = document.querySelector('#rest'); 

// function pickComputerMove()  {
//     const randomnumber = Math.random();
//     let computermove = '';

//     if(randomnumber >= 0 && randomnumber <= 1/2) {
//         computermove = "rock";
//     } else if (randomnumber >= 1/2 && randomnumber <= 2/3) {
//         computermove = "paper";
//     } if(randomnumber >= 2/3 && randomnumber <= 2) {
//         computermove = "scissors";
//     } 
// }

Rest.addEventListener('click',() => {
    score.wins = 0;
    score.losses = 0;
    score.tie = 0;
    playGame();
    localStorage.removeItem('mess')
    
})

let score =  JSON.parse(localStorage.getItem('mess')) || {wins:0, losses:0,tie:0};


console.log(score)


function playGame(play_move) {
    const randomnumber = Math.random();
    let computermove = '';

    if(randomnumber >= 0 && randomnumber <= 1/2) {
        computermove = "rock";
    } else if (randomnumber >= 1/2 && randomnumber <= 2/3) {
        computermove = "paper";
    } if(randomnumber >= 2/3 && randomnumber <= 2) {
        computermove = "scissors";
    } 

    let results = '';
    

    if (play_move === 'rock') {
        if (computermove === 'rock') {
            results = "Tie";
        } else if (computermove === 'paper') {
            results = "Your lose";
        } else if (computermove === 'scissors') {
            results = "Your win";
        }
    } else if(play_move === 'scissors') {
        if (computermove === 'rock') {
            results = 'Your lose';
        } else if (computermove === 'paper') {
            results = 'Your win';
        } else if (computermove === 'scissors') {
            results = 'tie';
        }
    } else if (play_move === 'paper') {
        if (computermove === 'rock') {
            results = 'Your win';
        } else if (computermove === 'paper') {
            results = 'tie';
        } else if (computermove === 'scissors') {
            results = 'Your lose';
        }
    }

    if (results === 'Your win') {
        score.wins += 1;
    } else if (results === 'Your lose') {
        score.losses += 1;
    } else if (results === 'tie') {
        score.tie += 1;
    }

    localStorage.setItem('mess', JSON.stringify(score));

    win.innerHTML = `You picked ${play_move}.`;
    computer.innerHTML = `you ${computermove} - ${results} computer.`
    win_lose_tie.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.tie}`;
}


