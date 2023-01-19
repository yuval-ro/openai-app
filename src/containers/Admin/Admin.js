import React, { useState } from 'react';
import { useSignOut } from 'react-auth-kit';
import { Container, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Database from '../../components/Database/Database';
import './Admin.css';


const Admin = () => {
	const signOut = useSignOut();
	const navigate = useNavigate();

	const logout = () => {
		signOut();
		navigate('/login');
	}

	return (
		<Container className='container-fluid border'>
			<div>Admin Container</div>
			<Button onClick={logout}>Logout</Button>
			<Database />
		</Container>
	)
}

export default Admin;