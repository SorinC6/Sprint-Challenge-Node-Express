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

projectRoute.delete('/:id', async (req, res) => {
	const { id } = req.params;

	try {
		const result = await projectDb.remove(id);
		result
			? res.status(200).json(result)
			: res.status(404).json({
					message: 'the project with specified id does not exists'
				});
	} catch (error) {
		res.status(500).json({ error: 'the project could not be removed' });
	}
});

projectRoute.put('/:id', async (req, res) => {
	const { id } = req.params;
	const project = req.body;

	if (project.name && project.description) {
		try {
			const result = await projectDb.update(id, project);
			if (result) {
				res.status(200).json(result);
			} else {
				res.status(404).json({ message: 'The project with specified id does not exists' });
			}
		} catch (error) {
			res.status(500).json({ error: 'the project information coulld not be modified' });
		}
	} else {
		res.status(400).json({ error: 'please provide a name and description for the project' });
	}
});


module.exports = projectRoute;
