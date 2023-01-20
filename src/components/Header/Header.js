import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';


const Header = () => (
	<Container className='container-fluid border'>
		<div>Header component</div>
		<Link to="/">Home</Link>
		<Link to="/admin">Admin</Link>
	</Container>
);

export default Header;