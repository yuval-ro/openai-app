const dotenv = require('dotenv').config({ path: './config/.env' })
const { davinciConnector, mongoConnector } = require('./connectors')
const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const app = express()
const tokens = 10

app.use(express.json())
app.use(cors())
app.listen(3001)

app.post('/api/davinci', (req, res) => {
  const prompt = req.body.message;
  try {
    const answer = davinciConnector.promptDavinci(prompt, tokens)
    mongoConnector.logToDb(prompt, answer)
    res.json({ message: answer })
  }
  catch (err) {
    console.error(err)
    res.status(500).end()
  }
})

app.post('/api/auth', (req, res) => {
  const { user, pass } = req.body
  if (user === process.env.USER && pass === process.env.PASS) {
    res.json({ token: jwt.sign('admin', process.env.SECRET) })
  }
  else {
    res.status(401).end()
  }
})

app.post('/api/create', (req, res) => {
  const { prompt, answer } = req.body;
  try {
    mongoConnector.logToDb(prompt, answer)
  }
  catch (err) {
    console.error(err)
    res.status(500).end()
  }
})

app.post('/api/read', async (req, res) => {
  try {
    const docs = await mongoConnector.getDocs()
    res.json({ docs })
  }
  catch (err) {
    console.error(err)
    res.status(500).end()
  }
})

app.patch('/api/update', (req, res) => {
  const { id, prompt, answer } = req.body
  try {
    mongoConnector.updateDocById(id, prompt, answer)
  }
  catch (err) {
    console.error(err)
    res.status(500).end()
  }
})

app.delete('/api/delete', (req, res) => {
  const { id } = req?.body;
  try {
    mongoConnector.deleteDocById(id)
  }
  catch (err) {
    console.error(err)
    res.status(500).end()
  }
})