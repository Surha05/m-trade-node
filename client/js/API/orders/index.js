async function set_order(order) {
  order = JSON.stringify(order)
  const url = '/API/orders/set/?data=' + order
  let res = await fetch(url)
  res = await res.text()
  return res
}
async function get_orders() {
  const url = '/API/orders/get'
  const response = await fetch(url)
  let data = await response.text()
  data = JSON.parse(data) || undefined
  return data
}
async function get_orders_by_hash() {
  const url = '/API/orders/get/by_hash'
  const response = await fetch(url)
  let data = await response.text()
  data = JSON.parse(data) || undefined
  return data
}

export { set_order, get_orders, get_orders_by_hash }