
let quote = document.querySelector('.quote');
let new_quote = document.querySelector('.new');
let author2 = document.querySelector('.author2');
let twitter = document.querySelector('#twitter');
let copy = document.querySelector('#copy');
let speaker = document.querySelector('#speak');


new_quote.addEventListener('click', () => {
    fetch('http://api.quotable.io/random').then(res => res.json()).then(result =>{
        console.log(result);
        quote.innerText = result.content;
        author2.innerText = result.author;
        new_quote.classList.toggle('loading')
    })
})


speaker.addEventListener('click', () => {
  let uttar = new SpeechSynthesisUtterance(`${quote.innerText } by ${author2.innerText}`);
  speechSynthesis.speak(uttar);
})


copy.addEventListener('click', () => {
  navigator.clipboard.writeText(`${quote.innerText } by ${author2.innerText}`)
})

twitter.addEventListener('click', () => {
  window.open("https://twitter.com/intent/tweet?text=Hello%20wo")
})