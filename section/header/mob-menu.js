(function(){
  const section = document.querySelector('.mob-menu');
  const btn_gamb = section.querySelector('.mob-menu__gamb-icon');
  const btn_search = section.querySelector('.mob-menu__search-icon');
  const btn_user = section.querySelector('.mob-menu__user-icon');
  const btn_cart = section.querySelector('.mob-menu__cart-icon');
  const menu = document.querySelector('.menu');

  btn_gamb.addEventListener('click', menu_toggle);
  // menu_bg.addEventListener('transitionend', ()=>{
  //   if(!menu.classList.contains('active')) menu_bg.style.display = 'none';
  // })

  function menu_toggle() {
    menu.classList.toggle('active');
    // if(menu.classList.contains('active')) {
    //   menu.classList.remove('active');
    //   menu_bg.style.opacity = 0;
    // } else {
    //   menu.classList.add('active');
    //   menu_bg.style.display = 'block';
    //   menu_bg.style.opacity = 1;
      
    // }
  }
})();