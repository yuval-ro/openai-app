const connString = 'mongodb://127.0.0.1:27017'
const dbName = 'db'
const collName = 'coll'
const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
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
  loremIpsum,
  logSchemaBody
}