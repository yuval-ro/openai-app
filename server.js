require('dotenv').config();
const davinci = require('./davinci');
const logger = require('./db');
const express = require('express');
const cors = require('cors'); // Cross-Origin Resource Sharing
const jwt = require('jsonwebtoken')
const port = 3001;



const app = express();

app.use(express.json());

app.use(cors());

app.listen(port, () => {
	console.log(`Server started and listening on port ${port}`);
});

app.post('/api/davinci', (req, res) => {
	const prompt = req.body.message;
	const tokens = 10;
	davinci(prompt, tokens)
		.then((answer) => {
			logger(prompt, answer)
				.catch((err) => {
					res
						.status(500)
						.json({ message: err.message })
				})
			res.json({ message: answer });
		})
		.catch((err) => {
			res
				.status(500)
				.json({ message: err.message })
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
})
