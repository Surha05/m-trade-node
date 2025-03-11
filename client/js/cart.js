import { get_nomenclatures } from "./API/nomenclatures/index.js"
import { get_suppliers } from "./API/suppliers/index.js"
(async function () {
  const log = console.log;
  const section = document.querySelector('#cart')
  const list = section.querySelector('#product-list')
  const total_sum = section.querySelector('#total-sum')

  let nomenclatures = await get_nomenclatures()
  let suppliers = await get_suppliers()
  
  let products_id = []
  products_id = get_from_LS()
  render_list()
  calc_total_sum()
  section.addEventListener('click', del_prod)
  section.addEventListener('click', choice_minus)
  section.addEventListener('click', choice_plus)

  function choice_plus(e) {
    if(!e.target.closest('.cart__choice-plus')) return
    let prod = e.target.closest('.cart__list')
    let parent = e.target.closest('.cart__choice')
    let value_el = parent.querySelector('.cart__choice-value')
    let value = value_el.textContent
    value++
    value_el.textContent = value
    let price_el = prod.querySelector('.cart__price')
    let price = price_el.textContent
    price = parseInt(price)
    let sum_prod = prod.querySelector('#sum-prod')
    sum_prod.innerHTML = price * value + ' руб.'
    calc_total_sum()
  }
  function choice_minus(e) {
    if(!e.target.closest('.cart__choice-minus')) return
    let prod = e.target.closest('.cart__list')
    let parent = e.target.closest('.cart__choice')
    let value_el = parent.querySelector('.cart__choice-value')
    let value = value_el.textContent
    if(value == 1) return
    value--
    value_el.textContent = value
    let price_el = prod.querySelector('.cart__price')
    let price = price_el.textContent
    price = parseInt(price)
    let sum_prod = prod.querySelector('#sum-prod')
    sum_prod.innerHTML = price * value + ' руб.'
    calc_total_sum()
  }
  function calc_total_sum() {
    let sum = 0
    let list = section.querySelectorAll('#sum-prod')
    for(let el of list) {
      let sum_prod = parseInt(el.textContent)
      sum += sum_prod
    }
    total_sum.textContent = sum + ' руб.'
  }
  function del_prod(e) {
    if(!e.target.closest('#del-icon')) return
    let prod = e.target.closest('.cart__list')
    let id = prod.id
    products_id = products_id.filter(el => el != id)
    render_list()
    calc_total_sum()
  }
  function render_list() {
    list.innerHTML = ''
    for(let el of products_id) {
      list.innerHTML += template_prod(el)
    }
  }
  function template_prod(id) {
    let prod = nomenclatures.find(el => el.guid == id)
    let {guid, name, supplier_guid, price, img} = prod
    return `
    <div class="cart__list" id="${guid}">
      <div class="cart__list-left">
        <div class="cart__photo-block">
          <img src="/img/product/${img}" class="cart__img"/>
        </div>
        <div class="cart__meta">
          <p class="cart__category">${get_category_name(supplier_guid)}</p>
          <p class="cart__title">${name}</p>
          <p class="cart__price">${price} &#8381;</p>
        </div>
      </div>
      <div class="cart__list-right">
        <div class="cart__choice">
          <span class="cart__choice-minus">&ndash;</span>
          <span class="cart__choice-value">1</span>
          <span class="cart__choice-plus">+</span>
        </div>
        <div class="cart__list-price">
          <span id="sum-prod" class="cart__list-span">${price} руб.</span>
          <div class="cart__del-block">
            <img src="/img/icon/trash.png" id="del-icon"/>
          </div>
        </div>
      </div>
    </div>`
  }
  function get_category_name(id) {
    let categ = suppliers.find(el => el.guid == id)
    return categ.name || 'не известно'
  }
  function get_from_LS() {
    let arr = localStorage.getItem('product-in-cart') || '[]'
    return JSON.parse(arr)
  }
})();
