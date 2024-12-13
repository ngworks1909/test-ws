import express from 'express'
import http from 'http'
const app = express()
const server = http.createServer(app)
import {Server} from 'socket.io'

const io = new Server(server, {
  cors: {
    origin: '*',
  },
})


io.on('connection', (socket) => {

  socket.on('send-data', (state) => {
    console.log('received canvas state')
    socket.broadcast.emit('recieve-data', state)
  })

  socket.on('clear', () => io.emit('clear'))
})

server.listen(3001, () => {
  console.log('✔️ Server listening on port 3001')
})
