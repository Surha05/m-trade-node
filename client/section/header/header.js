import { deleteCookie } from '../../js/coockie/coockie.js'
(function () {
  const btn = document.querySelector('.header__gamb');
  const menu = document.querySelector('.menu');
  const menu_bg = document.querySelector('.menu__wrapper');
  const exit_account_btn = document.querySelector('#exit-account');

  const log = console.log;

  btn.addEventListener('click', menu_toggle);
  exit_account_btn.addEventListener('click', exit_account);
  menu_bg.addEventListener('transitionend', () => {
    if (!menu.classList.contains('active')) menu_bg.style.display = 'none';
  });

  function exit_account(e) {
    e.preventDefault();
    let bool = confirm('Выйти с аккаунта')
    if(bool) {
      deleteCookie('_m_trade')
      window.location.href = '/auth';
    }
  }
  function menu_toggle() {
    if (menu.classList.contains('active')) {
      menu.classList.remove('active');
      menu_bg.style.opacity = 0;
    } else {
      menu.classList.add('active');
      menu_bg.style.display = 'block';
      menu_bg.style.opacity = 1;
    }
  }
  
})();
