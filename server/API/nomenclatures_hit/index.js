const log = console.log
const { path_nomenclatures_hit_DB } = require('../../my_modules/pathes');
const fs = require('fs')

function get_nomenclatures_hit(req, res) {
  let nomenclatures = fs.readFileSync(path_nomenclatures_hit_DB, 'utf-8')
  res.send(nomenclatures)
}

module.exports.get_nomenclatures_hit = get_nomenclatures_hit