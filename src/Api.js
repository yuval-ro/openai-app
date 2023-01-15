import axios from 'axios';

export const sendMessage = async (message) => {
	const res = await axios({ method : 'POST',
			url : 'http://localhost:3001',
			data : { message }
	});
	console.log(res?.data?.message);

	return res?.data?.message;
}