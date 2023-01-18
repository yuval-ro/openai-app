require('dotenv').config();
const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI;
const config = new Configuration({
	organization: process.env.API_ORG,
	apiKey: process.env.API_KEY
});
const openai = new OpenAIApi(config);
const testing = true;

async function davinci(prompt, tokens) {
	try {
		let answer = null;
		if (testing) {
			answer = 'davinci answer';
		} else {
			const response = await openai.createCompletion({
				model: 'text-davinci-003',
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

module.exports = davinci;