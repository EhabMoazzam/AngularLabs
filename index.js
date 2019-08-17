var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var app = express()
var http = require('http').Server(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/www'))

// route
require('./route/account')(app, path)
require('./route/login')(app)

let server = http.listen(3000, function(){
    let host = server.address().address
    let port = server.address().port

    console.log("My First Nodejs Server!")
    console.log("Server listening on : " + host + " port : " + port)

})
