import React from 'react';
import './Home.css';

import MessageForm from '../../components/MessageForm/MessageForm';

const Home = () => {
	return (
		<React.Fragment>
			<div>Home Container</div>
			<MessageForm />
		</React.Fragment>
		
	);
}

export default Home;