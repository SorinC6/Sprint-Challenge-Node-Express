const express = require('express');
const helmet = require('helmet');

//importing routes
const ActionRoutes = require('./routes/actionsRouter');

const server = express();
server.use(express.json());
server.use(helmet());

//using routes
server.use(ActionRoutes);

server.get('/', (req, res) => {
	res.send('<h1>Hello from the Server</h1>');
});

module.exports = server;
