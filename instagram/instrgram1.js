

/* ======================== button ====================== */
let first_number = document.querySelector(".first-number");
let second_number = document.querySelector(".second-number");
let third_number = document.querySelector(".third-number");
let four_number = document.querySelector(".four-number");
let five_number = document.querySelector(".five-number");
let following = document.querySelector(".following");
let home = document.querySelector(".home");
let reels = document.querySelector(".reels");
let message = document.querySelector(".message");
let search = document.querySelector(".search1");
let account = document.querySelector(".account");
let back_button = document.querySelector(".back-button");
let notifications = document.querySelector(".notifications");
let heart_button = document.querySelector(".heart-button");
let white_screen = document.querySelector(".white-button");
let body = document.querySelector("body");
let footer = document.querySelector(".footer");
let video_header = document.querySelector(".video-header");
let abs_down = document.querySelector(".abs");
let about_down = document.querySelector(".about-down");
let white_buttons = document.querySelector(".white-buttons")


let turn1 = true;

let logo1 = document.querySelector(".logo1");



home.addEventListener('click', () => {
    if(turn1) {
        second_number.classList.add('hide');
        third_number.classList.add('hide');
        four_number.classList.add('hide');
        five_number.classList.add('hide');
        first_number.classList.remove('hide');
    }
});

reels.addEventListener('click', () => {
    if(turn1) {
        first_number.classList.add('hide')
        second_number.classList.add('hide');
        third_number.classList.add('hide');
        four_number.classList.add('hide');
        five_number.classList.add('hide');
        second_number.classList.remove('hide');
    }
});

message.addEventListener('click', () => {
    if(turn1) {
        first_number.classList.add('hide')
        second_number.classList.add('hide');
        four_number.classList.add('hide');
        five_number.classList.add('hide');
        third_number.classList.remove('hide');
    }
});


search.addEventListener('click', () => {
    if(turn1) {
        first_number.classList.add('hide')
        second_number.classList.add('hide');
        third_number.classList.add('hide');
        five_number.classList.add('hide');
        four_number.classList.remove('hide');
    }
});


account.addEventListener('click', () => {
    if(turn1) {
        first_number.classList.add('hide')
        second_number.classList.add('hide');
        third_number.classList.add('hide');
        four_number.classList.add('hide');
        five_number.classList.remove('hide');
    }
});

logo1.addEventListener('click', () => {
    if(turn1) {
        following.classList.toggle('hide');
    }
    
});

back_button.addEventListener('click', ()=> {
    notifications.classList.add("hide");
    first_number.classList.remove("hide");
});

heart_button.addEventListener('click', ()=> {
    notifications.classList.remove("hide");
    first_number.classList.add("hide");
});

white_screen.addEventListener('click', white);

white_buttons.addEventListener('click', white)

function white() {
    body.classList.toggle("dark");
    footer.classList.add("dark");
    footer.classList.toggle("white");
    abs_down.classList.add("dark");
    abs_down.classList.toggle("white1");
    notifications.classList.toggle("dark");
}











/* =========================== video ======================== */
let video_full = document.querySelector('#video-full');


id.forEach(person => {
    video_full.innerHTML += `
        <div class="one-video">
            <video src="${person.videos}" controls autoplay muted loop></video>
            <div class="eye-number">
                <i class="fa-regular fa-eye"></i>
                <p>741K</p>
            </div>
        </div>
        `;
});



/* ========================= box 1 ======================== */

let box_1 = document.querySelector(".box-1");

id.forEach(person => {
    box_1.innerHTML += `
            <div class="image-des-sqaure ">
                <div class="image-circle">
                    <img src="${person.images}" alt="${person.images}">
                </div>
                <p class="id-name">${person.name}</p>
            </div>
    `;
});
/* ========================= box 2 ======================== */

let box_2 = document.querySelector(".box-2");

id.forEach(person => {
    box_2.innerHTML += `
            <div class="reels">
                <div class="video-header">
                    <div class="left">
                        <img src="${person.images}">
                    </div>
                    <div class="right">
                        <div class="id-name">
                            <h5>${person.name}</h5>
                            <p class="song">omakr song</p>
                        </div>

                        <div class="menu1">
                            <div class="follow">
                                <a>Follow</a>
                            </div>
                            <div class="menu2">
                                <i class="fa-solid fa-bars"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <video src="${person.videos}" controls autoplay muted loop></video>
            </div>

            <div class="describe-problem">
                <div class="message-heart">
                    <div class="video-icon">
                        <i class="fa-regular fa-heart"></i>
                        <i class="fa-regular fa-message"></i><p>57</p>
                        <i class="fa-solid fa-retweet"></i><p>1448</p>
                        <i class="fa-regular fa-paper-plane"></i>
                    </div>
                    <i class="fa-regular fa-bookmark"></i>
                </div>
                <div class="like">view likes</div>
            </div>
    `;
});



let menu1 = document.querySelector(".menu2");
let about_exit = document.querySelector(".user1");

menu1.addEventListener('click', ()=> {
    about_down.classList.remove("hide");
});

about_exit.addEventListener('click', ()=> {
    about_down.classList.add("hide");
});

