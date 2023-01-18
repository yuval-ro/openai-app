require('dotenv').config();
const davinci = require('./davinci');
const logger = require('./db');
const express = require('express');
const cors = require('cors'); // Cross-Origin Resource Sharing
const port = 3001;

const defuser = 'admin';
const defpass = defuser;


const app = express();

app.use(express.json());

app.use(cors());

app.listen(port, () => {
	console.log(`Server started and listening on port ${port}`);
});

app.post('/prompt', async (req, res) => {
	const prompt = req.body.message;
	try {
		const tokens = 10;
		const answer = await davinci(prompt, tokens);
		logger(prompt, answer);
		res.json({ message: answer });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

app.post('/login', (req, res) => {
	const user = req.body.user;
	const pass = req.body.pass;

	if (user == defuser && pass == defpass) {
		res.json({ auth: true });
	}
	else {
		res.json({ auth: false });
	}
})