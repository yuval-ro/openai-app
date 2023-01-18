import axios from 'axios';

export async function sendMessage(message) {
	const url = 'http://localhost:3001/prompt';
	const data = { message };

	const res = await axios({
		method: 'post',
		url: url,
		data: data,
	});

	return res?.data?.message;
}

export async function authLogin(user, pass) {
	const url = 'http://localhost:3001/login';
	const data = { user, pass };

	const res = await axios({
		method: 'post',
		url: url,
		data: data,
	});

	return res?.data?.auth;
}