require('dotenv').config({ path: './config/.env' })
const OpenAI = require('openai')
const { Configuration, OpenAIApi } = OpenAI
const config = new Configuration({
  organization: process.env.ORG,
  apiKey: process.env.KEY
})
const openai = new OpenAIApi(config)
const testing = false
const model = 'text-davinci-003'

async function promptDavinci(prompt) {
  try {
    const response = await openai.createCompletion({
      model: model,
      prompt: prompt,
      max_tokens: 25,
      temperature: 0,
    })
    return response.data.choices[0].text
  }
  catch (err) {
    console.error(err)
  }
}

module.exports = { promptDavinci };
