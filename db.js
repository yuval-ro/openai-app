const connString = 'mongodb://127.0.0.1:27017';
const dbName = 'db';
const collName = 'coll';
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const { Schema } = mongoose;
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
const logSchema = new Schema(
	logSchemaBody,
	{ collection: collName }
);
const LogModel = mongoose.model('LogModel', logSchema);


async function logger(prompt, answer) { // saves a log document to our database
	try {
		await mongoose.connect(`${connString}/${dbName}`, { autoIndex: false });
		console.log(`Successfully connected to database '${dbName}'`);
	}
	catch (err) {
		console.log(`Failed to connect to database '${dbName}'`);
		console.error(err);
		// res.status(500).json({ message: err.message });
	}
	try {
		const doc = new LogModel({
			prompt: prompt,
			answer: answer
		});
		await doc.save();
		console.log(`Successfully saved a document to collection '${collName}':\n${doc}`);
	}
	catch (err) {
		console.log(`Failed to save a document to '${dbName}/${collName}'`);
		console.error(err);
		// res.status(500).json({ message: err.message });
	}
}

module.exports = logger;