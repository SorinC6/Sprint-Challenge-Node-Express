// play this: https://www.youtube.com/watch?v=d-diB65scQU

const express = require('express');
const helmet = require('helmet');

const server = express();
server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
	res.send('<h1>Hello from the Server</h1>');
});

server.listen(4000, () => {
	console.log(` \n*** Server in Running on http://localhost:4000 ***\n`);
});
