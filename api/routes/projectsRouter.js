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

projectRoute.post('/', async (req, res) => {
	const project = req.body;

	if (project.name && project.description) {
		const result = await projectDb.insert(project);
		try {
			res.status(201).json(result);
		} catch (error) {
			res.status(500).json({ error: ' error while saving the project to database' });
		}
	} else {
		res.status(400).json({ error: 'Please provide name and description for the project' });
	}
});

module.exports = projectRoute;
