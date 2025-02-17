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
const { path_client } = require('./my_modules/pathes')

// переменные
const server = express()
const PORT = 3000
const log = console.log

// инициализация функций
server.listen(PORT, listen)
log(urlencoded_parser)
// роутинг
server.get('/', index)
server.post('/post/auth', urlencoded_parser, post_auth)
server.use(express.static(path_client))

// функции
function listen() {
  log('сервер запущен на порту ' + PORT)
}