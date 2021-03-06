const express = require('express');

const actionRoute = express.Router();

const actionDb = require('../../data/helpers/actionModel');

//get all the routes
actionRoute.get('/', (req, res) => {
	actionDb
		.get()
		.then((actions) => {
			res.status(200).json(actions);
		})
		.catch((err) => {
			res.status(500).json({ error: 'the actions could not be retrived' });
		});
});

actionRoute.get('/:id', (req, res) => {
	const { id } = req.params;

	actionDb
		.get(id)
		.then((action) => {
			if (action) {
				res.status(200).json(action);
			} else {
				res.status(404).json({ message: 'The action with the specified ID does not exist.' });
			}
		})
		.catch((err) => {
			res.status(500).json({ error: 'The action information could not be retrieved.' });
		});
});

actionRoute.post('/', async (req, res) => {
	const action = req.body;

	if (action.project_id && action.description && action.notes) {
		try {
			const result = await actionDb.insert(action);
			res.status(201).json(result);
		} catch (error) {
			res.status(500).json({ error: 'There was an error while saving the action to the database' });
		}
	} else {
		res.status(400).json({ error: 'please provide id , action or body for the action ' });
	}
});

actionRoute.delete('/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const action = await actionDb.remove(id);
		if (action) {
			res.status(200).json(action);
		} else {
			res.status(404).json({ message: 'The action with specified ID does not exists' });
		}
	} catch (error) {
		res.status(500).json({ error: 'the action coud not ne removed' });
	}
});

actionRoute.put('/:id', async (req, res) => {
	const { id } = req.params;
	const action = req.body;

	if (action.project_id && action.description && action.notes) {
		try {
			const result = await actionDb.update(id, action);

			if (result) {
				res.status(200).json(result);
			} else {
				res.status(404).json({
					message: 'The action with sepcified ID does not exists'
				});
			}
		} catch (error) {
			res.status(500).json({ error: 'The action could not be modified' });
		}
	} else {
		res.status(400).json({ error: 'Please provide id , description and notes for the action' });
	}
});

module.exports = actionRoute;
