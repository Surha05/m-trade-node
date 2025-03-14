const path = require('path')
const log = console.log

const path_auth = path.join(__dirname,'..', 'views', 'pages', 'auth.html')
const path_main = path.join(__dirname,'..', 'views', 'pages', 'main.html')
const path_client = path.join(__dirname, '..', '..', '/client')
const path_contractors_DB = path.join(__dirname,'..', '..', 'DB', 'contractors.json')
const path_suppliers_DB = path.join(__dirname,'..', '..', 'DB', 'suppliers.json')
const path_nomenclatures_DB = path.join(__dirname,'..', '..', 'DB', 'nomenclatures.json')
const path_orders_DB = path.join(__dirname,'..', '..', 'DB', 'orders.json')


module.exports.path_nomenclatures_DB = path_nomenclatures_DB
module.exports.path_contractors_DB = path_contractors_DB
module.exports.path_suppliers_DB = path_suppliers_DB
module.exports.path_client = path_client
module.exports.path_auth = path_auth
module.exports.path_main = path_main
module.exports.path_orders_DB = path_orders_DB