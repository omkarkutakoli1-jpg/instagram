let bar_btn = document.querySelector('.bar');
let menu_add = document.querySelector('#menu');
let menu_add1 = document.querySelector('#menu1');

let true0 = true;

function menu_click() {
    menu_add.classList.toggle('active');
    menu_add1.classList.toggle('active')
}


bar_btn.addEventListener('click', menu_click);