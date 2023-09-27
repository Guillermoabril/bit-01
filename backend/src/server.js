const express = require('express');
const morgan = require('morgan');
const userRouter = require('./routers/usersRouter')

const server = express();
const port = 4000;

server.set('port', port);

server.use(morgan('dev'));
server.use(express.json())

server.use('/users/', userRouter)
server.get('/', (request, response) => {
  response.json({message: 'works!!'});
});


// users






module.exports = server;