import React, { useState } from 'react';
import { sendMessage } from '../../Api';
import './MessageForm.css';
import { Row, Col, Form, Button } from 'react-bootstrap';


const MessageForm = ({ updateConverse, clearConversation }) => {
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

	const onClearButtonClick = (e) => {
		e.preventDefault();
		clearConversation();
	}

	return (
		<Row >
			<Col className='d-flex my-1 px-0'>
				<Form
					className='d-flex col-9'
					onSubmit={handleSubmit}>
					<Form.Control className=''
						value={currentPrompt}
						type='text'
						placeholder='Ask me anything...'
						onChange={e => onMessageFormChange(e)} />
					<Button className='mx-1' variant='primary' type='submit'>Submit</Button>
				</Form>
				<Button
					className='ms-auto'
					variant='outline-danger'
					onClick={onClearButtonClick}>Clear</Button>
			</Col>
		</Row>
	);
}

export default MessageForm;
