async function get_contractors() {
  const url = '/API/contractors/get'
  const response = await fetch(url)
  let data = await response.text()
  data = JSON.parse(data) || undefined
  return data
}

export { get_contractors }