const moment = require('moment')
const { mongoose, Schema } = require('mongoose')

const { connString, dbName, collName, logSchemaBody } = require('./consts')


const logSchema = new Schema(logSchemaBody, { collection: collName }) // defined schema for saving documents in the DB
const LogModel = mongoose.model('LogModel', logSchema) // document, constructed according to the specified schema
const options = {
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
}


mongoose.set('strictQuery', true) // ensures that only the fields that are specified in the Schema will be saved even if some other fields were sent
let isConnected = false


const exists = async (id) => {
  return (await LogModel.findOne({ _id: id }) != null)
}


const onSuccess = (action) => {
  console.log(`[${moment(Date.now()).format('HH:mm:ss.S')}] ${action} SUCCEEDED`)
}


const onFail = (action, reason, err = null) => {
  console.log(`[${moment(Date.now()).format('HH:mm:ss.S')}] ${action} FAILED: ${reason}`)
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
      onSuccess(action) // too much messages will be printed
    }
  }
  catch (err) {
    onFail(action, 'connection issue', err)
    throw err
  }
}


const addOne = async (prompt, answer) => {
  const action = `saving document {"${prompt}", "${answer}"}`
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
  const action = `deleting doc #${id}`
  if (! await exists(id)) {
    onFail(action, `doc does not exist in ${dbName}:${collName}`)
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


const deleteAll = async () => {
  const action = 'deleting all docs'
  try {
    await connect()
    await LogModel.deleteMany({})
    onSuccess(action)
  }
  catch (err) {
    onFail(action, 'connection issue', err)
    throw err
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


module.exports = {
  addOne,
  fetchAll,
  deleteOne,
  deleteAll,
  updateOne
}