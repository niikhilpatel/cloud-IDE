const http = require('http')
const express = require('express')
const { Server: SocketServer} = require('socket.io');
const { Socket } = require('dgram');

const app = express()
const server = http.createServer(app);
const io = new SocketServer({
    cors: '*'
}) 

io.attach(server);

ptyProcess.onData(data => {
    io.emit('terminal:data', data)
})

io.on('connection', (Socket) => {
    console.log(`Socket Connected`, socket.id)
})