const log = console.log
const { path_suppliers_DB } = require('../../my_modules/pathes');
const fs = require('fs')

function get_suppliers(req, res) {
  let suppliers = fs.readFileSync(path_suppliers_DB, 'utf-8')
  res.send(suppliers)
}

module.exports.get_suppliers = get_suppliers