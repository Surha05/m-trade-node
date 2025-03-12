async function set_order(order) {
  order = JSON.stringify(order)
  const url = '/API/orders/set/?data=' + order
  let res = await fetch(url)
  res = await res.text()
  return res
}

export { set_order }