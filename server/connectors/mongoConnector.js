const e = require('cors');
const { mongoose, Schema } = require('mongoose');
const { connString, dbName, collName, logSchemaBody } = require('./consts');
const logSchema = new Schema(logSchemaBody, { collection: collName });
const LogModel = mongoose.model('LogModel', logSchema);
mongoose.set('strictQuery', true);
let isConnected = false;


const init = async () => {
	try {
		if (!isConnected) {
			await mongoose.connect(`${connString}/${dbName}`, { autoIndex: false });
			isConnected = true;
			// console.log(`Successfully connected to database '${dbName}'`);
		}
	}
	catch (err) {
		// console.log(`Failed to connect to database '${dbName}'`);
		console.error(JSON.stringify(err));
	}
}

const logToDb = async (prompt, answer) => { // saves a log document to our database
	try {
		await init();
		const doc = new LogModel({
			prompt: prompt,
			answer: answer
		});
		await doc.save();
		// console.log(`Successfully saved a document to collection '${collName}':\n${doc}`);
	}
	catch (err) {
		isConnected = false;
		// console.log(`Failed to save a document to '${dbName}/${collName}'`);
		throw err;
	}
}

const getDocs = async (query) => {
	try {
		await init();
		docs = await LogModel.find({});
		// docs = await LogModel.find({ 'prompt': /{query}/i });
		// console.log('getdocs = ', docs);
		return docs;
	}
	catch (err) {
		isConnected = false;
		// console.log(`Failed to save a document to '${dbName}/${collName}'`);
		throw err;
	}
}

const deleteDocById = async (id) => {
	try {
		await init();
		await LogModel.deleteOne({ _id: id });
	}
	catch (err) {
		isConnected = false;
		// console.log(`Failed to save a document to '${dbName}/${collName}'`);
		throw err;
	}
}

const updateDocById = async (id, prompt, answer) => {
	try {
		await init();
		const filter = { _id: id }
		const update = { prompt: prompt, answer: answer }
		await LogModel.findOneAndUpdate(filter, update)
	}
	catch (err) {
		isConnected = false;
		console.log(`Failed to update document in '${dbName}/${collName}'`);
		throw err;
	}
}

module.exports = { logToDb, getDocs, deleteDocById, updateDocById };
