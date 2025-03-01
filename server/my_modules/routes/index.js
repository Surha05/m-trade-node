const log = console.log
const {getCookie} = require('../cookie')
const {path_auth, path_main, path_contractors_DB} = require('../pathes')
const md5 = require("md5")
const fs = require('fs')

function index(req, res, next) {
  const coockie = getCookie(req)
  if(coockie === undefined) {
    res.redirect('/auth')
    return
  }
  let contractors = fs.readFileSync(path_contractors_DB, 'utf-8')
  contractors = JSON.parse(contractors)
  for(let client of contractors) {
    const password = client.password
    const hash = md5(password)
    if(hash == coockie) {
      res.redirect('/main')
      break
    }
  }
  res.redirect('/auth')
}

module.exports.index = index