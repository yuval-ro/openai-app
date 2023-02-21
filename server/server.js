const dotenv = require('dotenv').config({ path: './config/.env' });
const { davinciConnector, mongoConnector } = require('./connectors');
const express = require('express');
const cors = require('cors'); // Cross-Origin Resource Sharing
const jwt = require('jsonwebtoken')
const port = 3001;



const app = express();

app.use(express.json());

app.use(cors());

app.listen(port, () => {
	// console.log(`Server started and listening on port ${port}`);
});

app.post('/api/davinci', (req, res) => {
	const prompt = req.body.message;
	const tokens = 10;
	davinciConnector.promptDavinci(prompt, tokens)
		.then((answer) => {
			mongoConnector.logToDb(prompt, answer)
				.catch((err) => {
					return res
						.status(500)
						.json({ message: err.message });
				})
			res.json({ message: answer });
		})
		.catch((err) => {
			return res
				.status(500)
				.json({ message: err.message });
		})
});

app.post('/api/auth', (req, res) => {
	const { user, pass } = req.body;
	const username = process.env.LOGIN_USER;
	const password = process.env.LOGIN_PASS;
	if (pass === password && user === username) {
		return res
			.json({
				auth: true,
				token: jwt.sign('admin', process.env.RSA_KEY)
			})
	}
	else {
		return res
			.status(400)
			.json({
				auth: false,
				token: null
			})
	}
});

app.post('/api/create', (req, res) => {

});

app.post('/api/read', (req, res) => {
	const { query } = req?.body;
	mongoConnector.getDocs(query)
		.then((docs) => {
			return res.json({ docs });
		})
		.catch((err) => {
			return res
				.status(500)
				.json({ message: err.message });
		});
});

app.get('/api/read', (req, res) => {
	mongoConnector.getDocs()
		.then((docs) => {
			return res.json({ docs });
		})
		.catch((err) => {
			return res
				.status(500)
				.json({ message: err.message });
		});
});

app.delete('/api/delete', (req, res) => {
	const { id } = req?.body;
	mongoConnector.deleteDocById(id)
		.then(() => {
			return res.json({ successful: true });
		})
		.catch((err) => {
			return res
				.status(500)
				.json({ successful: false, message: err.message });
		});
})
