import { get_nomenclatures } from "/js/API/nomenclatures/index.js"
import { get_suppliers } from "/js/API/suppliers/index.js"
import { get_orders } from "/js/API/orders/index.js"
import { get_contractors } from "/js/API/contractors/index.js"

(async function () {
  const log = console.log
  const client_list_el = document.querySelector('#client-list')
  const client_count_el = document.querySelector('#client-count')
  const order_count_el = document.querySelector('#order-count')
  const all_total_sum_el = document.querySelector('#all-total-sum')
  
  let clients = await get_contractors()
  let orders = await get_orders()
  
  render_client_list(clients)
  render_order_count()
  render_client_count()
  render_all_total_sum()

  function render_all_total_sum() {
    let all_sum = 0
    for(let el of orders) {
      let sum = el.total_sum || 0
      all_sum += sum
    }
    all_total_sum_el.innerHTML = all_sum + ' &#8381;'
  }
  function render_order_count() {
    order_count_el.textContent = (orders.length || 0) + ' шт'
  }
  function render_client_count() {
    client_count_el.textContent = (clients.length || 0) + ' шт'
  }
  function render_client_list(clients) {
    client_list_el.innerHTML = ''
    for(let el of clients) {
      client_list_el.innerHTML += template(el)
    }
  }
  function template(el) {
    return `
    <div class="table-section__row" id="${el.guid}">
      <div class="">${el.name}</div>
    </div>
    `
  }
  function get_date(date) {
    date = new Date(date)
    
    let day = date.getDate()
    if(day < 10) day = '0'+day
    let month = date.getMonth() + 1
    if(month < 10) month = '0'+month
    let year = date.getFullYear()
    let hour = date.getHours()
    if(hour < 10) hour = '0'+hour
    let minute = date.getMinutes()
    if(minute < 10) minute = '0'+minute

    let res = `${day}/${month}/${year} - ${hour}:${minute}`
    return res
  }
  function render_name_client() {
    client_name_el.textContent = client.name
  }
})()