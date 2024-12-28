(function(){
  const btn = document.querySelector('.header__gamb');
  const menu = document.querySelector('.menu');
  const menu_bg = document.querySelector('.menu__wrapper');

  btn.addEventListener('click', menu_toggle);
  menu_bg.addEventListener('transitionend', ()=>{
    if(!menu.classList.contains('active')) menu_bg.style.display = 'none';
  })

  function menu_toggle() {
    if(menu.classList.contains('active')) {
      menu.classList.remove('active');
      menu_bg.style.opacity = 0;
    } else {
      menu.classList.add('active');
      menu_bg.style.display = 'block';
      menu_bg.style.opacity = 1;
      
    }
  }
})();