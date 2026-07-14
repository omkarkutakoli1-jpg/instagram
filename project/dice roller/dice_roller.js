let num = document.querySelector('#num');
let game = document.querySelector('.game');
let images = document.querySelector('.images');
let button = document.querySelector('.button');



button.addEventListener('click', () => {
    const input_value = num.value;
    let values = [];
    let image = [];

    for(let i = 0; i < input_value; i++) {
        let sum = Math.floor(Math.random() * 6) + 1;
        values.push(sum)
        image.push(`<img src="img/inverted-dice-${sum}.png">`)
    }
    
    game.textContent = `Dice: ${values.join(', ')}`;
    images.innerHTML = image.join('');
})

