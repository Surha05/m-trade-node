(function () {
  document.addEventListener('click', click_btn)
  const header = document.querySelector('#header')
  const count = header.querySelector('#prod-count')
  
  function click_btn(e) {
    if (!e.target.closest('[data-btn="in-cart"]')) return;
    let btn = e.target.closest('[data-btn="in-cart"]');
    let card = btn.closest('.main__block');
    let id = card.id;

    if (btn.classList.contains('gradient')) {
      btn.classList.remove('gradient');
      btn.textContent = 'В корзине';
      add_in_LS(id);
    } else {
      btn.classList.add('gradient');
      btn.textContent = 'В корзину';
      del_from_LS(id);
    }
  }
  function add_in_LS(id) {
    let arr = localStorage.getItem('product-in-cart') || '[]'
    arr = JSON.parse(arr)
    arr.push(id)
    let set = new Set(arr)
    arr = set_to_arr(set)
    arr = JSON.stringify(arr)
    localStorage.setItem('product-in-cart', arr)
    count.textContent = set.size
  }
  function del_from_LS(id) {
    let arr = localStorage.getItem('product-in-cart') || '[]'
    arr = JSON.parse(arr)
    let set = new Set(arr)
    set.delete(id)
    arr = set_to_arr(set)
    arr = JSON.stringify(arr)
    localStorage.setItem('product-in-cart', arr)
    count.textContent = set.size
  }
  function set_to_arr(set) {
    let arr = []
    for (let el of set) arr.push(el)
    return arr
  }
})();
