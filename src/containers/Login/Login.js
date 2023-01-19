import React, { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './Login.css';


const Login = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const auth = (val) => {
		setIsLoggedIn(val);
	}

	return (
		<React.Fragment>
			<div>Login Container</div>
			<LoginForm onSubmit={auth} />
		</React.Fragment>
	);
}

export default Login;