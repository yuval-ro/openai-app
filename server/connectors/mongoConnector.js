const { mongoose, Schema } = require('mongoose');


const { connString, dbName, collName, logSchemaBody } = require('./consts');

const logSchema = new Schema(
	logSchemaBody,
	{ collection: collName }
);
const LogModel = mongoose.model('LogModel', logSchema);

mongoose.set('strictQuery', true);

let isConnected = false;

const init = async () => {
	try {
		if (!isConnected) {
			await mongoose.connect(`${connString}/${dbName}`, { autoIndex: false });
			isConnected = true;
			console.log(`Successfully connected to database '${dbName}'`);
		}
	}
	catch (err) {
		console.log(`Failed to connect to database '${dbName}'`);
		console.error(JSON.stringify(err));
	}
}

async function logToDb(prompt, answer) { // saves a log document to our database
	try {
		await init();
		const doc = new LogModel({
			prompt: prompt,
			answer: answer
		});
		await doc.save();
		console.log(`Successfully saved a document to collection '${collName}':\n${doc}`);
	}
	catch (err) {
		isConnected = false;
		console.log(`Failed to save a document to '${dbName}/${collName}'`);
		throw err;
	}
}

async function getAllDocs(prompt, answer) { // saves a log document to our database
	try {
		await init();
		return (await LogModel.find({}));
	}
	catch (err) {
		isConnected = false;
		console.log(`Failed to save a document to '${dbName}/${collName}'`);
		throw err;
	}
}

module.exports = { logToDb, getAllDocs };
