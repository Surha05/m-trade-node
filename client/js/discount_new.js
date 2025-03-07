import { get_nomenclatures_new } from "./API/nomenclatures_new/index.js"
import { get_suppliers_new } from "./API/suppliers_new/index.js"
(async function () {
  const section = document.querySelector('#new-section')
  const main = section.querySelector('.main__column')

  const log = console.log
  let nomenclatures = await get_nomenclatures_new()
  let suppliers = await get_suppliers_new()
  

  for(let el of nomenclatures) {
    main.innerHTML += `
      <div class="main__block" id="${el.guid}">
        <a href="/card.html?id=${el.guid}">
          <img src="/img/product/${el.img}" alt="" class="block__img" />
        </a>
        <div class="block__prices">
          <span class="block__price">${el.price} руб.</span>
          <span class="block__bonus" title="bonus">
            ${el.bonus} руб.
          </span>
        </div>
        <a href="/category.html?id=${el.supplier_guid}" class="block__desc">${get_category(el.supplier_guid)}</a>
        <h3 class="block__name">${el.name}</h3>
        <button class="btn block__btn gradient">В корзину</button>
      </div>
    `
  }

  function get_category(id) {
    let category = suppliers.find(el => el.guid == id)
    return category.name || 'категория не найдена'
  }
})()