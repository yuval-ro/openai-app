import axios from 'axios'

const sendMessage = async (message) => {
	try {
		const res = await axios({
			method: 'post',
			url: 'http://localhost:3001/api/davinci',
			data: { message }
		})
		return res?.data?.message
	}
	catch (err) {
		console.error(err)
	}
}

const authLogin = async (user, pass) => {
	const res = await axios({
		method: 'post',
		url: 'http://localhost:3001/api/auth',
		data: { user, pass }
	})
	return res?.data?.token
}

const createLog = async (prompt, answer) => {
	axios({
		method: 'post',
		url: 'http://localhost:3001/api/create',
		data: { prompt, answer }
	})
}

const readAll = () => {
	axios({
		method: 'get',
		url: 'http://localhost:3001/api/read'
	})
		.then(res => {
			return res?.data?.docs
		})
}

const updateLog = async (id, prompt, answer) => {
	await axios({
		method: 'put',
		url: 'http://localhost:3001/api/update',
		data: { id, prompt, answer }
	})
}

const deleteLog = async (id) => {
	await axios({
		method: 'delete',
		url: 'http://localhost:3001/api/delete',
		data: { id }
	})
}

export {
	sendMessage,
	authLogin,
	createLog,
	readAll,
	updateLog,
	deleteLog
}