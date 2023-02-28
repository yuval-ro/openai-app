const e = require('cors')
const { mongoose, Schema } = require('mongoose')
const { connString, dbName, collName, logSchemaBody } = require('./consts')
const logSchema = new Schema(logSchemaBody, { collection: collName })
const LogModel = mongoose.model('LogModel', logSchema)
mongoose.set('strictQuery', true)
const options = {
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
}
let isConnected = false

const exists = async (id) => {
  return (await LogModel.findOne({ _id: id }) != null)
}

const onSuccess = (action) => {
  console.log(`${action} SUCCEEDED`)
}

const onFail = (action, reason, err = null) => {
  isConnected = false
  console.log(`${action} FAILED: ${reason}`)
  if (err != null) {
    console.error(err)
  }
}

const connect = async () => {
  const action = `connecting to database "${dbName}"`
  try {
    if (!isConnected) {
      await mongoose.connect(`${connString}/${dbName}`, options)
      isConnected = true
      // onSuccess(action) // too much messages will be printed
    }
  }
  catch (err) {
    onFail(action, 'connection issue', err)
    throw err
  }
}

const addOne = async (prompt, answer) => {
  const action = `saving document {${prompt}, ${answer}}`
  try {
    await connect()
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

const fetchAll = async () => {
  const action = 'fetching all documents'
  try {
    await connect()
    const docs = await LogModel.find({})
    onSuccess(action)
    return docs
  }
  catch (err) {
    onFail(action, 'connection issue', err)
    throw err
  }
}

const deleteOne = async (id) => {
  const action = `deleting document ${id}`
  if (! await exists(id)) {
    onFail(action, 'does not exist')
  }
  else {
    try {
      await connect()
      await LogModel.deleteOne({ _id: id })
      onSuccess(action)
    }
    catch (err) {
      onFail(action, 'connection issue', err)
      throw err
    }
  }
}

const updateOne = async (id, prompt, answer) => {
  const action = `patching documnet ${id}`
  if (! await exists(id)) {
    onFail(action, 'does not exist')
  }
  else {
    try {
      await connect()
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

module.exports = { addOne, fetchAll, deleteOne, updateOne }
