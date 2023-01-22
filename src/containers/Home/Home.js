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
		console.log(converse);
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
		<Container className='container-fluid border border-3'>
			<Row className='mt-5 mb-5 border border-1'>
				<Col className='fs-1'>
					Chat with Davinci
				</Col>
			</Row>

			<React.Fragment>
				{renderConversation()}
			</React.Fragment>

			<MessageForm
				updateConverse={updateConverse}
			/>
		</Container>
	)
}

export default Home;
