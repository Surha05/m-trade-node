
const log = console.log
const {path_auth} = require('../pathes')

function auth(req, res) {
  res.sendFile(path_auth)
}

module.exports.auth = auth