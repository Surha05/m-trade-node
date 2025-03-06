async function get_nomenclatures() {
  const url = '/API/nomenclatures/get'
  const response = await fetch(url)
  let data = await response.text()
  data = JSON.parse(data) || undefined
  return data
}

export { get_nomenclatures }