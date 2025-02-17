
const log = console.log
const {path_auth, path_main, path_contractors_DB} = require('../pathes')
const md5 = require("md5")
const fs = require('fs')

function post_auth(req, res, next) {

  const login_client = req.body.login
  const password_client = req.body.password
  const isAuth = false
  let contractors = fs.readFileSync(path_contractors_DB, 'utf-8')
  contractors = JSON.parse(contractors)
  for(let client of contractors) {
    const login_true = client.phone
    const password_true = client.password
    if(password_true == password_client && login_true == login_client) {
      const hash = md5(password_true)
      res.cookie('_m_trade', hash);
      res.sendFile(path_main)
      break
    }
  }
  res.sendFile(path_auth)
  
}

module.exports.post_auth = post_auth