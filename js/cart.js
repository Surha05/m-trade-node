
const choiceMinus = document.querySelectorAll('.cart__choice-minus');
const choicePlus = document.querySelectorAll('.cart__choice-plus');

let totalSum = document.querySelector('.cart__total-sum');
let totalSale = document.querySelector('.cart__total-sale');
let totalResult = document.querySelector('.cart__total-result');
let totalSpan = document.querySelectorAll('.cart__list-span');
let del = document.querySelectorAll('.cart__del-block');
let value = 1;
const price = 200;
for (let el of choiceMinus) {
    el.addEventListener('click', minus)
}
for (let el of choicePlus) {
    el.addEventListener('click', plus)

}

for (let el of del) {
    el.addEventListener('click', (e) => {
        const tar = e.target;
        let parent = tar.closest('.cart__list');
        parent.style.display = 'none'
    })
}
calc();
function plus(e) {
    const tar = e.target;
    let parent = tar.closest('.cart__choice');
    let choiceValue = parent.querySelector('.cart__choice-value');
    let valueMax = choiceValue.textContent;
    valueMax++;
    choiceValue.textContent = valueMax;


    let grandParent = tar.closest('.cart__list');
    let span = grandParent.querySelector('.cart__list-span');
    span.textContent = `${choiceValue.textContent * price} руб.`;

    calc();

}

function calc() {
    let total = parseInt(totalSpan[0].textContent) + parseInt(totalSpan[1].textContent)
    totalSum.textContent = `${total} руб`;
    totalResult.textContent = `${total + parseInt(totalSale.textContent)} руб`;
}
function minus(e) {
    const tar = e.target;
    let parent = tar.closest('.cart__choice');
    let choiceValue = parent.querySelector('.cart__choice-value');
    if (choiceValue.textContent == 1) return;
    let valueMax = choiceValue.textContent;
    valueMax--;
    choiceValue.textContent = valueMax;


    let grandParent = tar.closest('.cart__list');
    let span = grandParent.querySelector('.cart__list-span');
    span.textContent = `${choiceValue.textContent * price} руб.`;

    calc();

}

