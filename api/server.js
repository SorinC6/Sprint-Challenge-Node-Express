const express = require('express');
const helmet = require('helmet');

//importing routes

const server = express();
server.use(express.json());
server.use(helmet());

//using routes

server.get('/', (req, res) => {
	res.send('<h1>Hello from the Server</h1>');
});

module.exports = server;
