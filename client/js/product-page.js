import { get_nomenclatures } from "./API/nomenclatures/index.js"
import { get_suppliers } from "./API/suppliers/index.js"
(async function () {
    const section = document.querySelector('#card-page')
    let img = section.querySelector('#img')
    let price = section.querySelector('#price')
    let bonus = section.querySelector('#bonus')
    let title = section.querySelector('#title')
    let category_el = section.querySelector('#category')
    const bread_crumbs = document.querySelector('#bread_crumbs')
    let bread_crumbs_title = bread_crumbs.querySelector('.crumbs_title')
    let bread_crumbs_category = bread_crumbs.querySelector('.crumbs_category')
    let desc = section.querySelector('#desc')
    let desc_title = section.querySelector('#desc-title')

    const log = console.log
    let nomenclatures = await get_nomenclatures()
    let suppliers = await get_suppliers()


    let url = new URL(window.location.href)
    let id = url.searchParams.get('id')

    let product = nomenclatures.find(el => el.guid == id)
    let category = getCategory(product.supplier_guid)

    img.src = `/img/product/${product.img}`
    price.textContent = `${Math.round(product.price - product.price*0.02)} р`
    if(product.stock)
        {bonus.innerHTML = product.stock}else{bonus.style.display = 'none'}

    title.textContent = product.name
    category_el.textContent = category.name
    category_el.href = `/category.html?id=${product.supplier_guid}`
    bread_crumbs_title.textContent = product.name
    bread_crumbs_category.textContent = category.name
    bread_crumbs_category.href = `/category.html?id=${product.supplier_guid}`
    console.log(product)
    desc.textContent = product.description


    function getCategory(id) {
    return suppliers.find(el => el.guid == id)

    }
})()