// Create a react component that inputs a textarea msg,
//  then performs a fetch req to localhost:3001,
//  gets back a response as a data.message,
//  finally displays that message in a box bellow.

import React, { useState } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav';
import { Navbar, NavbarBrand, NavLink } from 'react-bootstrap';

import logo from './openai.svg';

export default function App() {
	const [message, setMessage] = useState('');
	const [response, setResponse] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch('http://localhost:3001', {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({ message }),
		})
			.then((res) => res.json())
			.then((data) => setResponse(data.message));
	};

	const handleAdmin = (e) => {
		// e.preventDefault();
		prompt('Enter Administrator Credentials:');
	}
		// <div className="App">
		// 	<form onSubmit={handleSubmit}>
		// 		<textarea
		// 			value={message}
		// 			onChange={ (e) => setMessage(e.target.value)}
		// 		></textarea>
		// 		<button type="submit">Submit</button>
		// 	</form>
		// 	<div>{response}</div>
		// </div>

	return (
		<>
		<Container className='container-fluid'>
			<Navbar bg='dark' variant='dark'>
				<Navbar.Brand href='/'>Chat</Navbar.Brand>
				<Nav className="mr-auto">
                	<Nav.Link href="/">main</Nav.Link>
                	<Nav.Link onSelect={handleAdmin}>login</Nav.Link>
            	</Nav>
				{/* <Nav.Item>
					<Nav.Link href='/'>Dummy</Nav.Link>
				</Nav.Item> */}
				{/* <Nav.Item>
					<Nav.Link src={logo} width='50' height='50'></Nav.Link>
				</Nav.Item> */}
				{/* <Nav.Item>
					<Nav.Link onSelect={handleAdmin}>Admin Login</Nav.Link>
				</Nav.Item> */}
			</Navbar>
  		</Container>


		<Container className='container-fluid'>
			<Row className=''>
				<Col className='border text-center'>
					ChatGPT
				</Col>
				{/* <Col className='border'>Col2</Col> */}
				{/* <Col className='border'>Col3</Col> */}
			</Row>
	  </Container>
	  </>
	);
}
