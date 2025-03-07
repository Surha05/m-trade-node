async function get_suppliers_hit() {
    const url = '/API/suppliers_hit/get'
    const response = await fetch(url)
    let data = await response.text()
    data = JSON.parse(data) || undefined
    return data
  }
  
  export { get_suppliers_hit }