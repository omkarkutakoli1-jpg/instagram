let calculate_age = document.querySelector('#calculate_age');
let date = document.querySelector('#date');
let answer = document.querySelector('#answer');

calculate_age.addEventListener('click', () => {
    const date_value = date.value;
    const now_date = new Date();

    const birthdayDate = new Date(date_value);

    let age = now_date.getFullYear() - birthdayDate.getFullYear();
    // let age_ = now_date.getMonth() - birthdayDate.getMonth();

    answer.textContent = `Your age is ${age} years old.`
})