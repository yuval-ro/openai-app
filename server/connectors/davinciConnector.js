const dotenv = require('dotenv').config({ path: './config/.env' })
const OpenAI = require('openai')
const { loremIpsum } = require('./consts')
const { Configuration, OpenAIApi } = OpenAI // https://platform.openai.com/docs/api-reference/completions/create?lang=node.js
const config = new Configuration({
  organization: process.env.ORG,
  apiKey: process.env.KEY
})
const openai = new OpenAIApi(config)

const promptDavinci = async (prompt) => {
  try {
    // let res = await openai.createCompletion({
    //   model: 'text-davinci-003',
    //   prompt: prompt,
    //   max_tokens: 20,
    //   temperature: 0.9
    // })
    // res = res.data.choices[0].text.replace(/\s+/g, ' ').trim() // trim unnecessary crap like \n and \t
    // if (!res.endsWith('.')) {
    //   res += '...'
    // }
    // return res
    return loremIpsum
  }
  catch (err) {
    console.error(err)
  }
}

module.exports = { promptDavinci }