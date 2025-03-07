async function get_nomenclatures_new() {
    const url = '/API/nomenclatures_new/get'
    const response = await fetch(url)
    let data = await response.text()
    data = JSON.parse(data) || undefined
    return data
  }
  
  export { get_nomenclatures_new }