const log = console.log;
const { path_auth, path_main, path_contractors_DB } = require('../pathes');
const md5 = require('md5');
const fs = require('fs');
const { getCookie } = require('../cookie');

function main(req, res) {
  const coockie = getCookie(req);
  if (coockie === undefined) {
    res.redirect('/auth');
    return;
  }
  let contractors = fs.readFileSync(path_contractors_DB, 'utf-8');
  contractors = JSON.parse(contractors);
  for (let client of contractors) {
    const password = client.password;
    if (password === undefined) {
      res.redirect('/auth');
      return;
    }
    const hash = md5(password);
    if (hash == coockie) {
      res.sendFile(path_main);
      return
    }
  }
  res.redirect('/auth');
}

module.exports.main = main;
