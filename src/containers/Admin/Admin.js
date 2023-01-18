import React, { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import Database from '../../components/Database/Database';
import './Admin.css';


const Admin = () => {
	const [isLoggedIn, setIsLoggenIn] = useState(false);

	if (isLoggedIn) {
		return (
			<React.Fragment>
				<div>Admin Container</div>
				<Database />
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