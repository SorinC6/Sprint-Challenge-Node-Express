const express = require('express');

const projectRoute = express.Router();

const projectDb = require('../../data/helpers/projectModel');

projectRoute.get('/', (req, res) => {
	projectDb
		.get()
		.then((projects) => {
			res.status(200).json(projects);
		})
		.catch((err) => {
			res.status(500).json({ error: ' The project information could not be retrived' });
		});
});



module.exports = projectRoute;
