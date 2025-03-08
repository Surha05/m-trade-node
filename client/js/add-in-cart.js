(function () {
  // let btns = document.querySelectorAll('.block__btn');
  const log = console.log

  document.addEventListener('click', click_btn)
  // for (let el of btns) {
  //   el.addEventListener('click', (e) => {
  //     let tar = e.target;
  //     // el.classList.toggle('block__btn')
  //     el.classList.toggle('in-cart');
  //     // el.classList.remove('.gradient');
  //     if (el.classList.contains('block__btn')) tar.textContent = 'В корзину';
  //     if (el.classList.contains('in-cart')) tar.textContent = 'В корзине';
  //   });
  // }
  function click_btn(e) {
    if(!e.target.closest('[data-btn="in-cart"]')) return
    let btn = e.target.closest('[data-btn="in-cart"]')
    if(btn.classList.contains('gradient')) {
      btn.classList.remove('gradient')
      btn.textContent = 'В корзине'
      add_in_LS()
    } else {
      btn.classList.add('gradient')
      btn.textContent = 'В корзину'
      del_from_LS()
    }
    
  }
  function add_in_LS() {}
  function del_from_LS() {}
})();
