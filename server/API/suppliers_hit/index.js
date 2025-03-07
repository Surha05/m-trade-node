const log = console.log
const { path_suppliers_hit_DB } = require('../../my_modules/pathes');
const fs = require('fs')

function get_suppliers_hit(req, res) {
  let suppliers = fs.readFileSync(path_suppliers_hit_DB, 'utf-8')
  res.send(suppliers)
}

module.exports.get_suppliers_hit = get_suppliers_hit