import { get_suppliers } from "./API/suppliers/index.js"
(async function () {
  const log = console.log
  let suppliers = await get_suppliers()

  const menu = document.querySelector('#sidebar-menu')
  for(let el of suppliers) {
    menu.innerHTML += `
      <li><a href="/category.html?id=${el.guid}">${el.name}</a></li>
    `
  }
  
})()