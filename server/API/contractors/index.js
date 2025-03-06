const log = console.log
const { path_contractors_DB } = require('../../my_modules/pathes');
const fs = require('fs')

function get_contractors(req, res) {
  let contractors = fs.readFileSync(path_contractors_DB, 'utf-8')
  res.send(contractors)
}

module.exports.get_contractors = get_contractors