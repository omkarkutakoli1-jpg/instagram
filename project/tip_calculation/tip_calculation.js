let bill_amount = document.querySelector('#bill');
let Tip_percentage = document.querySelector("#tip");
let button_btn = document.querySelector("#calculate");
let how_total = document.querySelector("#how_total");




button_btn.addEventListener('click', () => {



    let bill = bill_amount.value;
    let Tip = Tip_percentage.value;
    let totalValue = bill * (1 + Tip / 100);

    how_total.textContent = totalValue;

})