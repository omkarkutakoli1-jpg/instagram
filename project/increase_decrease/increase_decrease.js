let parr = document.querySelector(".parr");
let decrement_btn = document.querySelector(".decrement");
let rest_btn = document.querySelector(".rest");
let increament_btn = document.querySelector(".increament");




let count = 0;

const decrement_btn1 = () => {
    count++;
    parr.innerText = count;
}


const rest_btn1 = () => {
    count = 0;
    parr.innerText = count;
}

const increament_btn1 = () => {
    count--;
    parr.innerText = count;
}



decrement_btn.addEventListener("click", decrement_btn1);
rest_btn.addEventListener("click", rest_btn1);
increament_btn.addEventListener("click", increament_btn1);