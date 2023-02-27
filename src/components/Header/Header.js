import React from 'react';
import './Header.css';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useSignOut } from 'react-auth-kit';
import { } from 'react-router-dom';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
	const signOut = useSignOut();
	const navigate = useNavigate();

	const logout = () => {
		signOut();
		navigate('/');
		setIsLoggedIn(false);
	}

	return (
		<Container className='container-fluid border-bottom border-2'>
			<Row className='py-2'>
				<Col className='d-flex ps-0 pe-0'>
					<Link className='ms-0' to='/'>
						<Button variant='outline-primary'>Home</Button>
					</Link>
					<Link className='ms-1' to='/about'>
						<Button variant='outline-secondary'>About</Button>
					</Link>
					<Link className='ms-1' to='/admin'>
						<Button variant='outline-secondary'>Admin</Button>
					</Link>
					{
						isLoggedIn ? (
							<div className='ms-auto me-0'>
								<Button
									onClick={logout}
									className='ms-1'
									variant='outline-danger'>
									Logout
								</Button>
							</div>

						) : null
					}
				</Col>
			</Row>
		</Container>
	)
}

export default Header;