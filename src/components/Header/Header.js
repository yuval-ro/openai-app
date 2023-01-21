import React from 'react';
import './Header.css';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useSignOut } from 'react-auth-kit';
import { } from 'react-router-dom';

const Header = (props) => {
	const signOut = useSignOut();
	const navigate = useNavigate();

	const logout = () => {
		signOut();
		navigate('/');
		props.setIsLoggedIn(false);
	}

	return (
		<Container className='container-fluid border border-3'>
			<Row className='mt-5 mb-5 border border-1'>
				<Col className='d-flex'>
					<Link to='/' className=''>
						<Button variant='outline-primary'>
							Home
						</Button>
					</Link>
					<Link to='/admin' className=''>
						<Button variant='outline-secondary'>
							Admin
						</Button>
					</Link>
					{
						props.isLoggedIn ? (
							<Button
								onClick={logout}
								variant='outline-danger'
								className='ms-auto'>
								Logout
							</Button>
						) : null
					}
				</Col>
			</Row>
		</Container>
	)
}

export default Header;