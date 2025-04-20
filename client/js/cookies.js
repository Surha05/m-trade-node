
(function () {
    const section = document.querySelector('.cookies');
    const btn = document.querySelector('.cookies__btn');

    let local = localStorage.getItem('div');
    if (local) section.style.display = 'none';
    if (local) return;

    btn.addEventListener('click', none);

    function none() {
        section.classList.remove('top')
        let div = JSON.stringify(section);
        if (!section.classList.contains('top')) localStorage.setItem('div', div);
        section.style.display = 'none'
    }
})()