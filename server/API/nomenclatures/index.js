const log = console.log
const { path_nomenclatures_DB } = require('../../my_modules/pathes');
const fs = require('fs')

function get_nomenclatures(req, res) {
  let nomenclatures = fs.readFileSync(path_nomenclatures_DB, 'utf-8')
  res.send(nomenclatures)
}

module.exports.get_nomenclatures = get_nomenclatures