import axios from 'axios';

export async function sendMessage(message) {
	const url = 'http://localhost:3001/api/davinci';
	const data = { message };

	const res = await axios({
		method: 'post',
		url: url,
		data: data,
	});

	return res?.data?.message;
}

export async function authLogin(user, pass) {
	const url = 'http://localhost:3001/api/auth';
	const data = { user, pass };

	const res = await axios({
		method: 'post',
		url: url,
		data: data,
	});

	return res?.data?.token;
}

export async function getAllLogs() {
	const url = 'http://localhost:3001/api/getall';

	const res = await axios({
		method: 'get',
		url: url,
	});
	return res?.data?.docs;
}
