import { get_nomenclatures } from "./API/nomenclatures/index.js"
import { get_suppliers } from "./API/suppliers/index.js"
(async function () {
  const log = console.log
  let nomenclatures = await get_nomenclatures()
  let suppliers = await get_suppliers()
  const section = document.querySelector('#category-page')
  const main = section.querySelector('.main__column')
  const h2 = section.querySelector('#category-name')

  let url = new URL(window.location.href);
  let id = url.searchParams.get('id')

  nomenclatures = nomenclatures.filter(el => {
    let cat = el.supplier_guid
    if (cat == id) return el
  })

  
  let supplier = suppliers.find(el => el.guid == id)
  h2.textContent = supplier.name;


  for (let el of nomenclatures) {
    let new_price = Math.round( el.price - el.price * 0.02)
    main.innerHTML += `
      <div class="main__block" id="${el.guid}">
        <a href="/card.html?id=${el.guid}" class="block__link">
          <img src="/img/product/${el.img}" alt="" class="block__img" />
        </a>
        <div class="block__prices">
        <div class="block__prices-left">
          
          <span class="block__price">${new_price} р</span>
          <span class="block__price-old">${el.price} р</span>
          </div>

        </div>
        <h3 class="block__name">${el.name}</h3>
        <button data-btn="in-cart" class="btn block__btn gradient">В корзину</button>
      </div>
    `

  }
})()