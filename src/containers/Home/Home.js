import React, { useState, useEffect } from 'react';
import './Home.css';
import { Container, Row, Col } from 'react-bootstrap';
import MessageForm from '../../components/MessageForm/MessageForm';
import ConverseRow from '../../components/ConverseRow/ConverseRow';
import { map } from 'lodash';

const Home = () => {
	const [converse, setConverse] = useState([]);


	const updateConverse = (newConverse) => {
		let oldConverse = converse;
		oldConverse.push(newConverse);
		setConverse([...oldConverse]);
	}

	const clearConversation = () => {
		setConverse([]);
	}

	const renderConversation = () => {
		return (
			map(converse, (c) => {
				const { prompt, answer } = c;
				return (
					<ConverseRow prompt={prompt} answer={answer} />
				)
			})
		)
	}

	return (
		<Container className='container-fluid'>
			<Row>
				<Col className='fs-1 my-1 px-0'> Chat with Davinci </Col>
			</Row>

			<Row>
				<Col
					className='overflow-auto border border-2 rounded-3 my-1'
					style={{ 'min-height': '400px', 'max-height': '400px' }}>
					{renderConversation()}
				</Col>
			</Row>

			<MessageForm
				updateConverse={updateConverse}
				clearConversation={clearConversation} />
		</Container>
	)
}

export default Home;
