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

const getAllLogs = async () => {
	const url = 'http://localhost:3001/api/getall';

	const res = await axios({
		method: 'get',
		url: url,
	});
	return res?.data?.docs;
}


export { sendMessage, authLogin, getAllLogs };