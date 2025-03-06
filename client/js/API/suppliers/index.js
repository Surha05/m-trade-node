async function get_suppliers() {
  const url = '/API/suppliers/get'
  const response = await fetch(url)
  let data = await response.text()
  data = JSON.parse(data) || undefined
  return data
}

export { get_suppliers }