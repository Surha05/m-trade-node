import { get_nomenclatures } from "./API/nomenclatures/index.js"
import { get_suppliers } from "./API/suppliers/index.js"
(async function () {
    const section = document.querySelector('#card-page')
    let img = section.querySelector('#img')
    let price = section.querySelector('#price')
    let bonus = section.querySelector('#bonus')
    let title = section.querySelector('#title')
    let category_el = section.querySelector('#category')


    const log = console.log
    let nomenclatures = await get_nomenclatures()
    let suppliers = await get_suppliers()


    let url = new URL(window.location.href)
    let id = url.searchParams.get('id')

    let product = nomenclatures.find(el => el.guid == id)
    let category = getCategory(product.supplier_guid)

    img.src = `/img/product/${product.img}`
    price.textContent = `${product.price} руб`
    bonus.innerHTML = `${product.bonus} <i class='bx bx-ruble' ></i>`
    title.textContent = product.name
    category_el.textContent = category.name

    function getCategory(id) {
    return suppliers.find(el => el.guid == id)

    }
})()