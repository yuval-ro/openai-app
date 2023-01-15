// express server will handle incoming requests
const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI;
const { MongoClient } = require('mongodb');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // express middleware
const app = express();
const port = 3001;
const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());


const config = new Configuration({
	organization: 'org-oPvteLntzf30LBYsxA0j1zyH',
	apiKey: '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'
});
const openai = new OpenAIApi(config);


async function run() {
	await client.connect();
	const db = client.db('open-ai-app');
	
	app.listen(port, () => {
		console.log(`listening on port ${port}`);
	});

	app.use(bodyParser.json());
	app.use(cors());

	app.get('/', (req, res) => {
		// res.type('html');
		res.sendFile(__dirname + '/index.html');
	});

	app.post('/', async (req, res) => {
		console.log(req.body);
		const { message } = req.body;
		// const response = await openai.createCompletion({
		// 	model: 'text-davinci-003',
		// 	prompt: ${message},
		// 	max_tokens: 20,
		// 	temperature: 0,
		// });
		// res.json({
		// 	message: response.data.choices[0].text
		// });
		// let collection = db.collection('log');
		// collection.insertOne(response);

		res.json({
			message: `you wrote: "${message}"`
		});
	});
}
run().catch(console.dir);

