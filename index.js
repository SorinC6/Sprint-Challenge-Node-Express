// play this: https://www.youtube.com/watch?v=d-diB65scQU
require('dotenv').config();

const server = require('./api/server');

const PORT=process.env.PORT || 8000

server.listen(PORT, () => {
	console.log(` \n*** Server in Running on http://localhost:${PORT} ***\n`);
});
