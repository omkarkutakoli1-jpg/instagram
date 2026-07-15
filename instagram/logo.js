

let login_in1 = document.querySelector(".login-in1");
let account_login = document.querySelector(".account-login");
let second_screen = document.querySelector(".second-screen");
let input = document.querySelector("input")
let pssword = document.querySelector(".password")

let True = true;

let input_fill = input.value;



login_in1.addEventListener('click', (e) => {

    // errors = getlogin(input.value, pssword.value);

    account_login.classList.toggle('hide');
    second_screen.classList.remove("hide");

    // if(errors) {
    //     e.preventDefault();
    //     account_login.classList.toggle('hide');
    //     second_screen.classList.remove("hide");
    // }
    // console.log("im")
});

function getlogin(input, password) {
    let errors = [];

    if(input === "" || input == null) {
        errors.push("first is required");
    }

    if(password === "" || password == null) {
        errors.push("password is required");
    }
}