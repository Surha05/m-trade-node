// встроенные модули
const http = require('http')
const path = require('path')

// скачанные модули
const express = require('express')
const body_parser = require('body-parser')
const urlencoded_parser = body_parser.urlencoded({extended: false})

// свои модули
const { index } = require('./my_modules/routes/index')
const { post_auth } = require('./my_modules/routes/post_auth')
const { auth } = require('./my_modules/routes/auth')
const { main } = require('./my_modules/routes/main')
const { path_client } = require('./my_modules/pathes')
const { get_suppliers } = require('./API/suppliers/index')
const { get_contractors } = require('./API/contractors/index')
const { get_nomenclatures } = require('./API/nomenclatures/index')
const { get_nomenclatures_new } = require('./API/nomenclatures_new/index')
const { get_suppliers_new } = require('./API/suppliers_new/index')
const { get_nomenclatures_hit } = require('./API/nomenclatures_hit/index')
const { get_suppliers_hit } = require('./API/suppliers_hit/index')
// переменные
const server = express()
const PORT = 3000
const log = console.log

// инициализация функций
server.listen(PORT, listen)
log(urlencoded_parser)
// роутинг
server.get('/', index)
server.get('/auth', auth)
server.get('/main', main)
server.post('/post/auth', urlencoded_parser, post_auth)
server.get('/API/suppliers/get', get_suppliers)
server.get('/API/suppliers_new/get', get_suppliers_new)
server.get('/API/suppliers_hit/get', get_suppliers_hit)
server.get('/API/contractors/get', get_contractors)
server.get('/API/nomenclatures/get', get_nomenclatures)
server.get('/API/nomenclatures_new/get', get_nomenclatures_new)
server.get('/API/nomenclatures_hit/get', get_nomenclatures_hit)
server.use(express.static(path_client))

// функции
function listen() {
  log('сервер запущен на порту ' + PORT)
}