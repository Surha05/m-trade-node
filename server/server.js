const http = require('http')
const express = require('express')
const path = require('path')

const clientFolderPath = path.join(__dirname, '..', '/client')
const server = express()
const PORT = 3000
const log = console.log

server.listen(PORT, listen)
server.use(express.static(clientFolderPath))

function listen() {
  log('сервер запущен на порту ' + PORT)
}