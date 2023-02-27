require('dotenv').config();
const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI;
const config = new Configuration({
	organization: process.env.API_ORG,
	apiKey: process.env.API_KEY
});
const openai = new OpenAIApi(config);
const testing = true;
const model = 'text-davinci-003'

async function promptDavinci(prompt, tokens) {
	try {
		let answer = null;
		if (testing) {
			answer = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat ac est ut elementum. Maecenas ornare ligula vel ex ullamcorper aliquam. Sed sodales eleifend lacus vitae tristique.';
		} else {
			const response = await openai.createCompletion({
				model: model,
				prompt: `${prompt}`,
				max_tokens: tokens,
				temperature: 0,
			});
			answer = response.data.choices[0].text;
		}
		return answer;
	}
	catch (err) {
		console.error(err);
	}
}

module.exports = { promptDavinci };
