const express = require('express');

const actionRoute = express.Router();

const actionDb = require('../../data/helpers/actionModel');

//get all the routes
actionRoute.get('/api/actions', (req, res) => {
	actionDb
		.get()
		.then((actions) => {
			res.status(200).json(actions);
		})
		.catch((err) => {
			res.status(500).json({ error: 'the actions could not be retrived' });
		});
});

module.exports = actionRoute;
