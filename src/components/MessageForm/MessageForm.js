import React, { useState } from 'react';
import './MessageForm.css';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { sendMessage } from '../../Api';



const MessageForm = () => {
	const [message, setMessage] = useState('');
	const [response, setResponse] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		sendMessage(message)
			.then(res => setResponse(res));
	};

	const onTextAreaChange = e => {
		setMessage(e?.target?.value);
	}

	return (
		<Container className='container-fluid'>
			<Row className=''>
				<Col className='border text-center'>
					<form onSubmit={handleSubmit}>
						<textarea
							value={message}
							onChange={e => onTextAreaChange(e)}
						>
						</textarea>
						<button type="submit">Submit</button>
					</form>
					<div>
						{response}
					</div>
				</Col>
			</Row>
	  </Container>
	);
}

export default MessageForm;