// express server will handle incoming requests
const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI;


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // express middleware
const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());


const configuration = new Configuration({
	organization: "org-oPvteLntzf30LBYsxA0j1zyH",
	apiKey: "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",
});
const openai = new OpenAIApi(configuration);


app.use(bodyParser.json());
app.use(cors());

app.post('/', async (req, res) => {
	const { message } = req.body;

	// const engi = `Pretend you are Bibi Netanyahu.
	// Person: How can I help you today?
	// Me: ${message}
	// Person: `

	// const response = await openai.createCompletion({
	// 	model: 'text-davinci-003',
	// 	prompt: engi,
	// 	max_tokens: 20,
	// 	temperature: 0,
	// });
	// res.json({
	// 	message: response.data.choices[0].text
	// });
	res.json({
		message: 'test'
	});
})

app.post('/admin', (req, res) => {
	const { message } = req.body;

	// const engi = `Pretend you are Bibi Netanyahu.
	// Person: How can I help you today?
	// Me: ${message}
	// Person: `

	// const response = await openai.createCompletion({
	// 	model: 'text-davinci-003',
	// 	prompt: engi,
	// 	max_tokens: 20,
	// 	temperature: 0,
	// });
	// res.json({
	// 	message: response.data.choices[0].text
	// });
	res.json({
		message: 'test'
	});
})

app.listen(port, () => {
	console.log(`listening on port ${port}`);
})