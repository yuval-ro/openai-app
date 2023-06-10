const secret = require('../secret.js')
const OpenAI = require('openai')


const { Configuration, OpenAIApi } = OpenAI
const config = new Configuration({
  organization: secret.org,
  apiKey: secret.key
})


const openai = new OpenAIApi(config)


const promptDavinci = async (prompt) => {
  try {
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