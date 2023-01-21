import React, { useState } from 'react';
import './Home.css';
import { Container, Row, Col } from 'react-bootstrap';
import MessageForm from '../../components/MessageForm/MessageForm';
import MessageWindow from '../../components/MessageWindow/MessageWindow';

const Home = () => {

	const [message, setMessage] = useState('');
	const [response, setResponse] = useState('');

	return (
		<Container className='container-fluid border border-3'>
			<Row className='mt-5 mb-5 border border-1'>
				<Col className='fs-1'>
					Chat with Davinci
				</Col>
			</Row>

			<MessageWindow />

			<MessageForm
				message={message}
				setMessage={setMessage}
				response={response}
				setResponse={setResponse}
			/>
		</Container>
	)
}

export default Home;
