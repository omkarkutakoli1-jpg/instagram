

let login_in1 = document.querySelector(".login-in1");
let account_login = document.querySelector(".account-login");
let second_screen = document.querySelector(".second-screen");
let input = document.querySelector("input")
let pssword = document.querySelector(".password")

let True = true;

let input_fill = input.value;



login_in1.addEventListener('click', () => {
    
            account_login.classList.toggle('hide');
            second_screen.classList.remove("hide");
       
})