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
		<React.Fragment>
			<Row className='mt-5 mb-5 border border-1'>
				<Col>
					<Row className='justify-content-start'>
						<Col className='col-5 border border-primary rounded-1'>
							What is your question?
						</Col>
					</Row>
					<Row className='justify-content-end'>
						<Col className='col-5 border border rounded-2'>
							My Question is... ?
						</Col>
					</Row>
					<Row className='justify-content-start'>
						<Col className='col-5 border border-primary rounded-1'>
							Okay, this is my answer...
						</Col>
					</Row>
				</Col>
			</Row>

			<Row className='mt-5 mb-5 border border-1'>
				<Col>
					<Form onSubmit={handleSubmit}>
						<Form.Group className='' controlId=''>
							<Form.Control type='text' placeholder='Enter your question here'
								value={message}
								onChange={e => onMessageFormChange(e)}></Form.Control>
						</Form.Group>
						<Button variant='primary' type='submit'>Submit</Button>
					</Form>
				</Col>
			</Row>
		</React.Fragment>
	);
}

export default MessageForm;