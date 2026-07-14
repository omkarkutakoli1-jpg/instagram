// let rest_btn = document.querySelector(".reset");
// let boxes = document.querySelectorAll(".box");
// let new_game = document.querySelector(".new-game");
// let msg_container = document.querySelector(".msg-container");
// let msg = document.querySelector(".msg");
// let container = document.querySelector(".container");
// let game = document.querySelector(".game");

// let turn0 = true;

// let winpatterns = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];


// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         if (turn0) {
//             box.textContent = "O";
//             turn0 = false;
//         } else {
//             box.textContent = "X";
//             turn0 = true;
//         }
//         box.disabled = true;
//         checkWin();
//     });
// })


// function checkWin() {
//     for (let pattern of winpatterns) {
//         let [a, b, c] = pattern;
//         if (boxes[a].textContent && boxes[a].textContent === boxes[b].textContent && boxes[a].textContent === boxes[c].textContent) {
//             showWinner(boxes[a].textContent);
//             break;
//         }
//     }
// }

// const showWinner = (winner) => {
//     msg.textContent = `Congratulations, winner is ${winner}`;
//     msg_container.classList.remove("hide");
//     container.classList.add("hide");
// }

// new_game.addEventListener("click", () => {
//     msg_container.classList.add("hide");
//     container.classList.remove("hide");
// });


// class ToyataCar {
//     start() {
//         console.log("Car started");
//     }
//     stop() {
//         console.log("Car stopped");
//     }
// }

// let car1 = new ToyataCar();


/* ==========================================  todo ========================================= */

// let input_text = document.querySelector(".js-input-text");
// let add_btn = document.querySelector(".add");
// let table_btn = document.querySelector(".table-box");
// let input_date = document.querySelector(".js-input-date");

// const todolist = [{
//     name: 'omker kutakoli',
//     dueDate: '13-10-2006'
// },{
//     name: 'gireesh kutakoli',
//     dueDate: '21-9-2001'
// }];

// ran()

// function ran() {
//     let todolistHTML = '';

//     for(let i = 0; i < todolist.length; i++) {
//         const todoObjiect = todolist[i];
//         console.log(todoObjiect)
//         const name = todoObjiect.name;
//         const dueDate = todoObjiect.dueDate;
//         console.log(name ,",", dueDate)
//         const html = `<p>${name} ${dueDate}
//                       <button onclick="
//                       todolist.splice(${i},1);
//                       ran();
//                       ">Delete</button></p>`;
//         todolistHTML += html;
//     }

//     table_btn.innerHTML = todolistHTML;
// }

// add_btn.addEventListener('click', () => {
//     let input_value = input_text.value;
//     let date_value = input_date.value;
//     todolist.push(input_value, date_value);
//     ran()

//     input_text.value = '';
//     input_date.value = '';
// })


// setTimeout(function () {
//     console.log("hellow world!");
// }, 10000);

// setInterval(function () {
//     console.log("hellow world!1");
// }, 3000);


// let input_btn = document.querySelector('.input');
// let button_btn = document.querySelector('.submit');
// let describe_btn = document.querySelector('.describe');

// button_btn.addEventListener('click', () => {
//     input_btns = input_btn.value;
//     describe_btn.innerHTML = input_btns;

//     input_btn.value = "";
// })


let minbtn = 1;
let maxbtn = 100;
let answer = Math.floor(Math.random() * maxbtn) + minbtn;
console.log(answer);

let attempts = 0;
let running = true;
let guess;

while (running) {
    guess = window.prompt(`Guess a number between ${minbtn} - ${maxbtn}: `);
    guess = Number(guess);

    if(isNaN(guess)) {
        window.alert("please enter a vaild number");
    } else if(guess < minbtn || guess > maxbtn) {
        window.alert("please enter a vaild number");
    } else {
        attempts++;
        if(guess < answer) {
            window.alert("Too Low! Try again");
        } else if(guess > answer) {
            window.alert("Too high! Try again");
        } else {
            window.alert("CORRECT!");
            running = false;
        }
    }
}



