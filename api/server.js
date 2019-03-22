const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

//importing routes
const ActionRoutes = require('./routes/actionsRouter');
const ProjectRoutes = require('./routes/projectsRouter');

const server = express();
server.use(express.json());
server.use(cors());
server.use(helmet());

//using routes
server.use('/api/actions', ActionRoutes);
server.use('/api/projects', ProjectRoutes);

server.get('/', (req, res) => {
	res.send('<h1>Hello from the Server</h1>');
});

module.exports = server;
