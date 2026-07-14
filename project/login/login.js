let create_btn = document.querySelector('#create');
let signup_btn = document.querySelector('#SIGNUP');
let login_btn = document.querySelector('#LOGIN');
let create1_btn = document.querySelector('#create1');


create_btn.addEventListener('click', () => {
    signup_btn.classList.toggle('active');
    login_btn.classList.toggle('active');
})

create1_btn.addEventListener('click', () => {
    signup_btn.classList.toggle('active');
    login_btn.classList.toggle('active');
})