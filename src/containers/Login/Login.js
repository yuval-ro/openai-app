import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LoginForm from '../../components/LoginForm/LoginForm';
import './Login.css';


const Login = (props) => {

	const onSuccessfulLogin = () => {
		props.setIsLoggedIn(true);
	}

	return (
		<Container className='container-fluid border border-3'>
			<Row className='mt-5 mb-5 border border-1'>
				< Col className='fs-1' >
					Administrator Login
				</Col >
			</Row >
			<LoginForm onSuccessfulLogin={onSuccessfulLogin} />
		</Container >
	)
}

export default Login;