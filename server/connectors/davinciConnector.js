const dotenv = require('dotenv').config({ path: './config/.env' })
const OpenAI = require('openai')
const { Configuration, OpenAIApi } = OpenAI
const config = new Configuration({
  organization: process.env.ORG,
  apiKey: process.env.KEY
})
const openai = new OpenAIApi(config)
const model = 'text-davinci-003'

const promptDavinci = async (prompt) => {
  try {
    const res = await openai.createCompletion({
      model: model,
      prompt: prompt,
      max_tokens: 25,
      temperature: 0
    })
    return res.data.choices[0].text
  }
  catch (err) {
    console.error(err)
  }
}

module.exports = { promptDavinci }