import React, { useState } from 'react';
import { sendMessage } from '../../Api';

import './MessageForm.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';



const MessageForm = () => {
	const [message, setMessage] = useState('');
	const [response, setResponse] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		sendMessage(message)
			.then((response) => {
				setResponse(response);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	const onMessageFormChange = e => {
		setMessage(e?.target?.value);
	}

	return (
		<Container className='container-fluid'>
			<Row className=''>
				<Col className='border'>
					<Form className='' onSubmit={handleSubmit}>
						<Form.Label>
							<h2>Chat with OpenAI</h2>
						</Form.Label>
						<Form.Group className='' controlId=''>
							<Form.Control type='text' placeholder='Enter your question here'
								value={message}
								onChange={e => onMessageFormChange(e)}></Form.Control>
						</Form.Group>
						<Button variant='primary' type='submit'>Submit</Button>
					</Form>
					<div>
						{response}
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default MessageForm;