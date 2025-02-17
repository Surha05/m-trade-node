const log = console.log

function getCookie(req) {
  const cookies = req.headers.cookie
  let indStart = cookies.indexOf('_m_trade=')
  if(indStart == -1) return
  let indEnd = cookies.indexOf(';', indStart)
  let coockie = cookies.slice(indStart, indEnd)
  let indEqual = coockie.indexOf('=', coockie)
  let value = coockie.slice(indEqual+1)
  return value
}

module.exports.getCookie = getCookie