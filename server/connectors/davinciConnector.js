const dotenv = require('dotenv').config({ path: './config/.env' })
const OpenAI = require('openai')
const { Configuration, OpenAIApi } = OpenAI // https://platform.openai.com/docs/api-reference/completions/create?lang=node.js

const config = new Configuration({
  organization: process.env.ORG,
  apiKey: process.env.KEY
})
const openai = new OpenAIApi(config)

const { loremIpsum } = require('./consts')
let testing = false

const promptDavinci = async (prompt) => {
  try {
    if (testing) {
      return loremIpsum
    }
    let res = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 50,
      temperature: 0.9
    })
    answer = res?.data?.choices[0]?.text.replace(/\s+/g, ' ').trim() // trim unnecessary crap like \n and \t
    if (!answer.endsWith('.')) { // if completion text ended abruptly, i.e. limitation of tokens
      answer += '...'
    }
    return answer
  }
  catch (err) {
    console.error(err)
  }
}

module.exports = { promptDavinci }