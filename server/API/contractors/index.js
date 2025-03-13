const log = console.log;
const { path_contractors_DB } = require('../../my_modules/pathes');
const fs = require('fs');
const md5 = require('md5');
const { getCookie } = require('../../my_modules/cookie');

function get_contractors(req, res) {
  let contractors = fs.readFileSync(path_contractors_DB, 'utf-8');
  res.send(contractors);
}
function get_contractor_by_hash(req, res) {
  
  const coockie = getCookie(req);
  if (coockie === undefined) {
    res.send('')
    return;
  }
  let contractors = fs.readFileSync(path_contractors_DB, 'utf-8');
  contractors = JSON.parse(contractors);
  for (let client of contractors) {
    const password = client.password;
    if (password === undefined) {
      res.send('')
      return;
    }
    const hash = md5(password);
    if (hash == coockie) {
      res.send(client)
      return;
    }
  }
}

module.exports.get_contractors = get_contractors;
module.exports.get_contractor_by_hash = get_contractor_by_hash
