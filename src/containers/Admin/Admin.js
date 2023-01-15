import React, { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './Admin.css';

const Admin = () => {
	const [isLoggedIn, setIsLoggenIn] = useState(false);

	if (isLoggedIn) {
		return (
			<React.Fragment>
				<div>Admin Container</div>
				<div>insert Log component</div>
			</React.Fragment>
		);
	}
	else {
		return (
			<React.Fragment>
				<div>Admin Container</div>
				<LoginForm />
			</React.Fragment>
		);
	}
}

export default Admin;