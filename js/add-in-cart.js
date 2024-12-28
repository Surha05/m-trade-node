(function(){
let btns = document.querySelectorAll('.block__btn');
for (let el of btns) {
    el.addEventListener('click', (e) => {
        let tar = e.target;
        // el.classList.toggle('block__btn')
        el.classList.toggle('in-cart')
        // el.classList.remove('.gradient');
        if (el.classList.contains('block__btn')) tar.textContent = 'В корзину';
        if (el.classList.contains('in-cart')) tar.textContent = 'В корзине';

    });
}
})();
