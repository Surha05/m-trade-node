(function () {
  const form = document.querySelector('#form');
  const login = form.querySelector('#login');
  const pass = form.querySelector('#password');
  const btn = form.querySelector('#send__btn');
  const notify = form.querySelector('#notify');
  const log = console.log;


  btn.addEventListener('click', send)

  function send(e) {
    e.preventDefault();

    if (login.value.trim() == '') {
      notify.textContent = 'Введите номер телефона';
      login.value = ''
      return;
    }
    if (pass.value.trim() == '') {
      notify.textContent = 'Введите пароль';
      pass.value = ''
      return;
    }
    form.submit()
  }
  log(document.cookie);
})();
