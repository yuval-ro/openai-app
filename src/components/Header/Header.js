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

{/* <Container className='container-fluid'> */ }
{/* <Navbar bg='dark' variant='dark'> */ }
{/* <Navbar.Brand href='/'>Chat</Navbar.Brand> */ }
{/* <Nav className="mr-auto"> */ }
{/* <Nav.Link href="/">main</Nav.Link> */ }
{/* <Nav.Link onSelect={handleAdmin}>login</Nav.Link> */ }
{/* </Nav> */ }
{/* <Nav.Item>
					<Nav.Link href='/'>Dummy</Nav.Link>
				</Nav.Item> */}
{/* <Nav.Item>
					<Nav.Link src={logo} width='50' height='50'></Nav.Link>
				</Nav.Item> */}
{/* <Nav.Item>
					<Nav.Link onSelect={handleAdmin}>Admin Login</Nav.Link>
				</Nav.Item> */}
{/* </Navbar> */ }
{/* </Container> */ }