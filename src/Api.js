import axios from 'axios';


const sendMessage = async (message) => {
	const url = 'http://localhost:3001/api/davinci';
	const data = { message };

	const res = await axios({
		method: 'post',
		url: url,
		data: data,
	});

	return res?.data?.message;
}

const authLogin = async (user, pass) => {
	const url = 'http://localhost:3001/api/auth';
	const data = { user, pass };

	const res = await axios({
		method: 'post',
		url: url,
		data: data,
	});

	return res?.data?.token;
}

const createLog = async (log) => {
	const res = await axios({
		method: 'post',
		url: 'http://localhost:3001/api/create',
		data: log,
	});
}

const getLog = async (log) => {
	const res = await axios({
		method: 'get',
		url: 'http://localhost:3001/api/get',
		data: log
	});
	return res?.data?.docs;
}

const getAllLogs = async () => {
	const res = await axios({
		method: 'get',
		url: 'http://localhost:3001/api/getall'
	});
	return res?.data?.docs;
}

const updateLog = async (log) => {
	const res = await axios({
		method: 'put',
		url: 'http://localhost:3001/api/update',
		data: log
	});
}

const deleteLog = async (log) => {
	const res = await axios({
		method: 'delete',
		url: 'http://localhost:3001/api/delete',
		data: log
	});
}


export {
	sendMessage,
	authLogin,
	createLog,
	getLog,
	getAllLogs,
	updateLog,
	deleteLog
};
