let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset_btn");
let newBtn = document.querySelector(".new_btn");
let msg = document.querySelector(".msg_text");
let container_btn = document.querySelector(".msg_container");
let main_btn = document.querySelector(".main");

let turn0 = true;

let winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const restGame = () => {
    turn0 = true;
    enableboxes();
    container_btn.classList.add('hide');
    main_btn.classList.remove("hide");
};

    



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const samewinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    container_btn.classList.remove("hide");
    main_btn.classList.add("hide");
    disableboxes();
}

const checkwinner = () => {
    for(let patters of winpatterns) {
        let pos1val = boxes[patters[0]].innerText;
        let pos2val = boxes[patters[1]].innerText;
        let pos3val = boxes[patters[2]].innerText;

        if (pos1val != "", pos2val != "", pos3val != "") {
            if (pos1val == pos2val && pos2val == pos3val) {
                samewinner(pos1val);
            }
        }
    }
}

resetBtn.addEventListener("click", restGame);
newBtn.addEventListener("click", restGame);