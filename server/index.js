const express = require('express')
const cors = require('cors')
const moment = require('moment')
const jwt = require('jsonwebtoken')

const secret = require('./secret.js')
const { davinciConnector, mongoConnector } = require('./connectors')

const app = express()
const port = 3001
app.use(express.json())
app.use(cors())
app.listen(port, () => {
  console.log(`[${moment(Date.now()).format('HH:mm:ss.S')}] server started and listening on port ${port}`)
})

app.post('/api/davinci', async (req, res) => {
  const prompt = req?.body?.prompt
  try {
    const answer = await davinciConnector.promptDavinci(prompt)
    console.log(answer)
    await mongoConnector.addOne(prompt, answer)
    res.json({ answer: answer })
  }
  catch (err) {
    console.error(err)
    res.status(500).end()
  }
})

app.post('/api/auth', (req, res) => {
  const { user, pass } = req?.body
  if (user === secret.user && pass === secret.pass) {
    res.json({ token: jwt.sign('admin', secret.secret) })
  }
  else {
    res.status(401).end()
  }
})

app.post('/api/create', async (req, res) => {
  const { prompt, answer } = req?.body
  try {
    await mongoConnector.addOne(prompt, answer)
    const docs = await mongoConnector.fetchAll()
    res.json({ docs })
  }
  catch (err) {
    console.error(err)
    res.status(500).end()
  }
})

app.post('/api/read', async (req, res) => {
  try {
    const docs = await mongoConnector.fetchAll()
    res.json({ docs })
  }
  catch (err) {
    console.error(err)
    res.status(500).end()
  }
})

app.patch('/api/update', async (req, res) => {
  const { id, prompt, answer } = req.body
  try {
    await mongoConnector.updateOne(id, prompt, answer)
    const docs = await mongoConnector.fetchAll()
    res.json({ docs })
  }
  catch (err) {
    console.error(err)
    res.status(500).end()
  }
})

app.delete('/api/delete', async (req, res) => {
  const { id } = req?.body
  try {
    await mongoConnector.deleteOne(id)
    const docs = await mongoConnector.fetchAll()
    res.json({ docs })
  }
  catch (err) {
    console.error(err)
    res.status(500).end()
  }
})

app.delete('/api/deleteall', async (req, res) => {
  try {
    await mongoConnector.deleteAll()
    const docs = await mongoConnector.fetchAll()
    res.json({ docs })
  }
  catch (err) {
    console.error(err)
    res.status(500).end()
  }
})
