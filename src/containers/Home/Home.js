import React from 'react';
import './Home.css';
import { Container, Row, Col } from 'react-bootstrap';
import MessageForm from '../../components/MessageForm/MessageForm';


const Home = () => (
	<Container className='container-fluid border border-3'>
		<Row className='mt-5 mb-5 border border-1'>
			<Col className='fs-1'>
				Chat with Davinci
			</Col>
		</Row>

		<MessageForm />
	</Container>
);

export default Home;