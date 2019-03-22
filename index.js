// play this: https://www.youtube.com/watch?v=d-diB65scQU

const server = require('./api/server');

server.listen(4000, () => {
	console.log(` \n*** Server in Running on http://localhost:4000 ***\n`);
});
