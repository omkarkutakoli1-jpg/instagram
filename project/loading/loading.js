var i = 0;
let block = document.querySelector('.block');

const interval = setInterval(() => {
    if(i == block.length) {
        i = 0;
        block.style.background = 'transparent';
    }
    else {
        block[i].style.background = 'yellow';
        i += 1;
    }
}, 250)