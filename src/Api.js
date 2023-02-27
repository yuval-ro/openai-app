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

const createLog = async (prompt, answer) => {
	const data = { prompt: prompt, answer: answer };
	const res = await axios({
		method: 'post',
		url: 'http://localhost:3001/api/create',
		data: data,
	});
}

const readAll = async () => {
	const res = await axios({
		method: 'get',
		url: 'http://localhost:3001/api/read',
	});
	return res?.data?.docs;
}

const updateLog = async (id, prompt, answer) => {
	const data = { id: id, prompt: prompt, answer: answer };
	const res = await axios({
		method: 'put',
		url: 'http://localhost:3001/api/update',
		data: data
	});
}

const deleteLog = async (id) => {
	const res = await axios({
		method: 'delete',
		url: 'http://localhost:3001/api/delete',
		data: { id }
	});
}

export {
	sendMessage,
	authLogin,
	createLog,
	readAll,
	updateLog,
	deleteLog
}