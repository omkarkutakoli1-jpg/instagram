// let start = document.querySelector('#start')
// let stop = document.querySelector('#stop')
// let rest = document.querySelector('#rest')
// let timer = document.querySelector('#timer')

// let timeleft = 1500;
// let interval;


// function updateTimer() {
//     let min = Math.floor(timeleft / 60);
//     let sec = timeleft % 60;

//     timer.innerHTML = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`
// }


// const start1 = () => {
//     interval = setInterval(() => {
//         timeleft--;
//         updateTimer();

//         if(timeleft === 0) {
//             clearInterval(interval);
//             alert("Time's up!");
//             timeleft = 1500;
//             updateTimer();
//         }
//     },1000)
// }

// const stop1 = () => {
//     clearInterval(interval);
// }

// const rest1 = () => {
//     clearInterval(interval);
//     timeleft = 1500;
//     updateTimer();
// }


// start.addEventListener('click', start1)
// stop.addEventListener('click', stop1)
// rest.addEventListener('click', rest1)



















let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let rest = document.querySelector('#rest');
let time = document.querySelector('#time');

let timeleft = 1500;
let interval;

function updatetime() {
    let min = Math.floor(timeleft / 60);
    let sec = timeleft % 60;

    time.innerHTML = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
    console.log(time);

}

updatetime();


let start1 = () => {

    interval = setInterval(() => {
        timeleft++;
        updatetime();

        if(timeleft === 0) {
            clearInterval(interval);
            timeleft = 1500;
            updatetime();
        }
    },1000);
}

let stop1 = () => {
    clearInterval(interval);
}

let rest1 = () => {
    clearInterval(interval);
    timeleft = 1500;
    updatetime();
}


start.addEventListener('click', start1)
stop.addEventListener('click', stop1)
rest.addEventListener('click', rest1)