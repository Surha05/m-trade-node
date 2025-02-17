const log = console.log
const {getCookie} = require('../cookie')
const {path_auth, path_main, path_contractors_DB} = require('../pathes')
const md5 = require("md5")
const fs = require('fs')

function index(req, res, next) {
  const coockie = getCookie(req)
  if(coockie === undefined) {
    res.sendFile(path_auth)
    return
  }
  let isAuth = false
  let contractors = fs.readFileSync(path_contractors_DB, 'utf-8')
  contractors = JSON.parse(contractors)
  for(let client of contractors) {
    const password = client.password
    const hash = md5(password)
    if(hash == coockie) {
      res.sendFile(path_main)
      break
    }
  }
  res.sendFile(path_auth)
  // res.cookie('AuthSession', 'somekeyhere');
  
}

module.exports.index = index