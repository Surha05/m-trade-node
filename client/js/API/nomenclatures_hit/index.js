async function get_nomenclatures_hit() {
    const url = '/API/nomenclatures_hit/get'
    const response = await fetch(url)
    let data = await response.text()
    data = JSON.parse(data) || undefined
    return data
  }
  
  export { get_nomenclatures_hit }