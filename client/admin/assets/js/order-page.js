import { get_nomenclatures } from "/js/API/nomenclatures/index.js"
import { get_suppliers } from "/js/API/suppliers/index.js"
import { get_orders } from "/js/API/orders/index.js"
import { get_contractor_by_hash } from "/js/API/contractors/index.js"

(async function () {
  const log = console.log
  const client_name_el = document.querySelector('#client-name')

  // let nomenclatures = await get_nomenclatures()
  // let suppliers = await get_suppliers()
  // let orders = await get_orders()
  let client = await get_contractor_by_hash()

  render_name_client()

  function render_name_client() {
    client_name_el.textContent = client.name
  }
})()