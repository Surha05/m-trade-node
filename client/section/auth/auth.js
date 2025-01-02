(function () {
    const numb = document.querySelector('.auth__numb');
    const pass = document.querySelector('.pass');
    const btn = document.querySelector('.form__btn');
    const text = document.querySelector('.form__result');

    const data = {
        number: 'admin',
        password: 'admin',
    }

    btn.addEventListener('click', validate);

    function validate(e) {
        e.preventDefault();

        if (numb.value == '') {
            text.textContent = 'Заполните номер телефона';
            return;
        }
        if (numb.value !== 'admin') {
            text.textContent = 'Номер телефона введен не правильно';
            return;
        }
        if (pass.value == '') {
            text.textContent = 'Заполните пароль';
            return;
        }
        if (pass.value !== 'admin') {
            text.textContent = 'Пароль введен не правильно';
            return;
        }
        text.textContent = '';
        document.location.href = '/main.html'
    }



})();

