const e = require('cors')
const { mongoose, Schema } = require('mongoose')
const { connString, dbName, collName, logSchemaBody } = require('./consts')
const logSchema = new Schema(logSchemaBody, { collection: collName })
const LogModel = mongoose.model('LogModel', logSchema)
mongoose.set('strictQuery', true)
let isConnected = false

const docExists = async (id) => {
  return (await LogModel.findOne({ _id: id }) != null)
}

const onSuccess = (action) => {
  console.log(`${action} succeeded`)
}

const onFail = (action, reason, err = null) => {
  isConnected = false
  console.log(`${action} failed: ${reason}`)
  if (err != null) {
    console.error(err)
  }
}

const init = async () => {
  const action = `connecting to database "${dbName}"`
  try {
    if (!isConnected) {
      await mongoose.connect(`${connString}/${dbName}`, { autoIndex: false })
      isConnected = true
      // onSuccess(action) // too much messages will be printed
    }
  }
  catch (err) {
    onFail(action, 'connection issue', err)
    throw err
  }
}

const logToDb = async (prompt, answer) => {
  const action = `saving document {${prompt}, ${answer}}`
  try {
    await init()
    const doc = new LogModel({
      prompt: prompt,
      answer: answer
    })
    await doc.save()
    onSuccess(action)
  }
  catch (err) {
    onFail(action, 'connection issue', err)
    throw err
  }
}

const getDocs = async () => {
  const action = 'retrieving all documents'
  try {
    await init()
    docs = await LogModel.find({})
    onSuccess(action)
    return docs;
  }
  catch (err) {
    onFail(action, 'connection issue', err)
    throw err
  }
}

const deleteDocById = async (id) => {
  const action = `deleting document ${id}`
  if (! await docExists(id)) {
    onFail(action, 'does not exist')
  }
  else {
    try {
      await init()
      await LogModel.deleteOne({ _id: id })
      onSuccess(action)
    }
    catch (err) {
      onFail(action, 'connection issue', err)
      throw err
    }
  }
}

const updateDocById = async (id, prompt, answer) => {
  const action = `patching documnet ${id}`
  if (! await docExists(id)) {
    onFail(action, 'does not exist')
  }
  else {
    try {
      await init()
      const filter = { _id: id }
      const update = { prompt: prompt, answer: answer }
      await LogModel.findOneAndUpdate(filter, update)
      onSuccess(action)
    }
    catch (err) {
      onFail(action, 'connection issue', err)
      throw err
    }
  }
}

module.exports = { logToDb, getDocs, deleteDocById, updateDocById }
