import React, { useState } from 'react';
import { sendMessage } from '../../Api';
import './MessageForm.css';
import { Row, Col, Form, Button } from 'react-bootstrap';


const MessageForm = ({ updateConverse }) => {
	const [currentPrompt, setCurrentPrompt] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		sendMessage(currentPrompt)
			.then((res) => {
				updateConverse({ prompt: currentPrompt, answer: res });
				setCurrentPrompt('');
			})
			.catch((err) => {
				console.error(err);
			});
	};

	const onMessageFormChange = (e) => {
		e.preventDefault();
		setCurrentPrompt(e?.target?.value);
	}

	return (
		<Row className='mt-5 mb-5 border bt-1'>
			<Col>
				<Form onSubmit={handleSubmit}>
					<Form.Group className='' controlId=''>
						<Form.Control
							value={currentPrompt}
							type='text'
							placeholder='Ask me anything...'
							onChange={e => onMessageFormChange(e)} ></Form.Control>
					</Form.Group>
					<Button variant='primary' type='submit'>Submit</Button>
				</Form>
			</Col>
		</Row>
	);
}

export default MessageForm;
