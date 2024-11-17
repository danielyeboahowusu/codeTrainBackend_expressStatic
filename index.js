const express = require('express');
const path = require('path')

const server = express()

server.use(express.static(path.join(__dirname,'public')))

// server.use('/')
server.listen(3000,'127.0.0.1',()=>console.log('Server is ready to receive request'))