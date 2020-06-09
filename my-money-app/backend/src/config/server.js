const cors = require('./cors')
const queryParser = require('express-query-int')

const port = 3003
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(queryParser())

server.use(cors)


server.listen(port, function() {
 console.log(`BACKEND is rodando na porta ${port}.`)
})

module.exports = server
