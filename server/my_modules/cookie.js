const log = console.log

function getCookie(req, res) {
  const coockies = req.headers.cookie
  
  if(!coockies) return
  let indStart = coockies.indexOf('_m_trade=')
  if(indStart == -1) return
  let indEnd = coockies.indexOf(';', indStart)
  let coockie
  if(indEnd == -1) coockie = coockies.slice(indStart)
  else coockie = coockies.slice(indStart, indEnd)
  let indEqual = coockie.indexOf('=', coockie)
  let value = coockie.slice(indEqual+1)
  return value
}

module.exports.getCookie = getCookie