import { get_nomenclatures } from "/js/API/nomenclatures/index.js"
import { get_suppliers } from "/js/API/suppliers/index.js"
import { get_orders } from "/js/API/orders/index.js"

(async function () {
  const log = console.log

  let nomenclatures = await get_nomenclatures()
  let suppliers = await get_suppliers()
  let orders = await get_orders()

  log(orders)
})()