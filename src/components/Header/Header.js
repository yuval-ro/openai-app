import React from 'react';
import './Header.css';

import { Outlet, Link } from "react-router-dom";

const Header = () => {
	return (
		<React.Fragment>
			<div>Header component</div>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/admin">Admin</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</React.Fragment>
	);
}

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