const path = require('path')
const log = console.log

const path_auth = path.join(__dirname,'..', 'views', 'pages', 'auth.html')
const path_main = path.join(__dirname,'..', 'views', 'pages', 'main.html')
const path_client = path.join(__dirname, '..', '..', '/client')
const path_contractors_DB = path.join(__dirname,'..', '..', 'DB', 'contractors.json')

module.exports.path_contractors_DB = path_contractors_DB
module.exports.path_client = path_client
module.exports.path_auth = path_auth
module.exports.path_main = path_main