import React, { useState } from 'react';
import { sendMessage } from '../../Api';

import './MessageForm.css';
import { Row, Col, Form, Button } from 'react-bootstrap';



const MessageForm = (props) => {

	const handleSubmit = (e) => {
		e.preventDefault();
		sendMessage(props.message)
			.then((res) => {
				props.setResponse(res);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	const onMessageFormChange = (e) => {
		e.preventDefault();
		props.setMessage(e?.target?.value);
	}

	return (
		<Row className='mt-5 mb-5 border border-1'>
			<Col>
				<Form onSubmit={handleSubmit}>
					<Form.Group className='' controlId=''>
						<Form.Control type='text' placeholder='Ask me anything...'
							onChange={e => onMessageFormChange(e)} ></Form.Control>
					</Form.Group>
					<Button variant='primary' type='submit'>Submit</Button>
				</Form>
			</Col>
		</Row>
	);
}

export default MessageForm;