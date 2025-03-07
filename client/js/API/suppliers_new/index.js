async function get_suppliers_new() {
    const url = '/API/suppliers_new/get'
    const response = await fetch(url)
    let data = await response.text()
    data = JSON.parse(data) || undefined
    return data
  }
  
  export { get_suppliers_new }