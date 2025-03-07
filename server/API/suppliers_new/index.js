const log = console.log
const { path_suppliers_new_DB } = require('../../my_modules/pathes');
const fs = require('fs')

function get_suppliers_new(req, res) {
  let suppliers = fs.readFileSync(path_suppliers_new_DB, 'utf-8')
  res.send(suppliers)
}

module.exports.get_suppliers_new = get_suppliers_new