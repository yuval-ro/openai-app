import React from 'react';
import './Home.css';

import { Container } from 'react-bootstrap';
import MessageForm from '../../components/MessageForm/MessageForm';

const Home = () => (
	<Container className='container-fluid border'>
		<div>Home Container</div>
		<MessageForm />
	</Container>
);

export default Home;