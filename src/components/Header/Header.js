import React from 'react';
import './Header.css';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useSignOut } from 'react-auth-kit';
import { } from 'react-router-dom';

const Header = () => {
	const signOut = useSignOut();
	const navigate = useNavigate();

	const logout = () => {
		signOut();
		navigate('/');
	}

	return (
		<Container className='container-fluid border'>
			<Row>
				<Col>
					<Link to="/">
						<Button variant='outline-primary'>Home</Button>
					</Link>
					<Link to="/admin">
						<Button variant='outline-secondary'>Admin</Button>
					</Link>
					<Button onClick={logout} variant='outline-danger'>Logout</Button>
				</Col>
			</Row>
		</Container>
	)
}

export default Header;