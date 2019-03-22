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

projectRoute.get('/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const project = await projectDb.get(id);
		project
			? res.status(200).json(project)
			: res.status(404).json({
					message: 'the project with specified id does not exists'
				});
	} catch (error) {
		res.status(500).json({ error: 'The project information could not be retrived' });
	}
});

module.exports = projectRoute;
