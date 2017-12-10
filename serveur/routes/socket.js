var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

/* Socket */

io.on('connection', function(client) {
    console.log('Client connected...');

    client.on('join', function(data) {
        console.log(data);
    });});
module.exports = io;













