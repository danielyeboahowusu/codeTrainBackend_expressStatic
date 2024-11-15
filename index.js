const express = require('express');

const server = express()
server.post('/service',(req,res)=>res.send('<h2>Welcome to the service page</h2>'))
server.put('/about',(req,res)=>res.send('<h2>Welcome to the about page</h2>'))
server.get('/',(req,res)=>res.send('<h2>Welcome to the home page</h2>'))
server.delete('/',(req,res)=>res.send('<h2>Welcome to the home page</h2>'))
server.listen(3000,'127.0.0.1',()=>console.log('Server is ready to receive request'))