const log = console.log
const { path_orders_DB, path_contractors_DB } = require('../../my_modules/pathes')
const { getCookie } = require('../../my_modules/cookie');
const fs = require('fs')
const md5 = require('md5');

function add_order(req, res) {
  let data = JSON.parse(req.query.data)
  data.id = new Date()
  let coockie = getCookie(req) || ''
  let contractor

  let contractors = fs.readFileSync(path_contractors_DB, 'utf-8')
  contractors = JSON.parse(contractors)
  for (let client of contractors) {
    const password = client.password;
    const hash = md5(password);
    if (hash == coockie) {
      contractor = client
      break
    }
  }
  if(!contractor) {
    res.send('Клиент не опознан, повторите снова')
    return
  }
  data.contractor = contractor.guid
  let orders = fs.readFileSync(path_orders_DB, 'utf-8')
  orders = JSON.parse(orders)
  orders.push(data)
  orders = JSON.stringify(orders)
  fs.writeFileSync(path_orders_DB, orders)
  res.send('Заказ в обработке. Вы перенаправитесь на главную страницу')
}
function get_order(req, res) {
  let orders = fs.readFileSync(path_orders_DB, 'utf-8')
  res.send(orders)
}
function get_orders_by_hash(req, res) {
  let contractor
  const coockie = getCookie(req);
  if (coockie === undefined) {
    res.send('')
    return;
  }
  let contractors = fs.readFileSync(path_contractors_DB, 'utf-8');
  contractors = JSON.parse(contractors);
  for (let client of contractors) {
    const password = client.password;
    const hash = md5(password);
    if (hash == coockie) {
      contractor = client
      break
    }
  }
  if(!contractor) {
    res.send('')
    return
  }
  let orders = fs.readFileSync(path_orders_DB, 'utf-8')
  orders = JSON.parse(orders)
  orders.filter(el => el.contractor == contractor.guid)
  res.send(orders)
}

module.exports.add_order = add_order
module.exports.get_order = get_order
module.exports.get_orders_by_hash = get_orders_by_hash
