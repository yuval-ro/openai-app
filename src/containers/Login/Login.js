import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LoginForm from '../../components/LoginForm/LoginForm';
import './Login.css';


const Login = ({ isLoggedIn, setIsLoggedIn }) => {

	const onSuccessfulLogin = () => {
		setIsLoggedIn(true);
	}

	return (
		<Container className='container-fluid'>
			<Row>
				< Col className='fs-1 my-1 px-0' >
					Administrator Login
				</Col >
			</Row >
			<LoginForm onSuccessfulLogin={onSuccessfulLogin} />
		</Container >
	)
}

export default Login;