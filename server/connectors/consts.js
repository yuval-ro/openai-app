const connString = 'mongodb://127.0.0.1:27017'
const dbName = 'db'
const collName = 'coll'

const logSchemaBody = {
  prompt: {
    type: String,
    required: true,
    default: 'dummy prompt'
  },
  answer: {
    type: String,
    required: true,
    default: 'dummy answer'
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  }
}

module.exports = {
  connString,
  dbName,
  collName,
  logSchemaBody
}