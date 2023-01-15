// Create a react component that inputs a textarea msg,
//  then performs a fetch req to localhost:3001,
//  gets back a response as a data.message,
//  finally displays that message in a box bellow.

import React from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav';
import { Navbar, NavbarBrand, NavLink } from 'react-bootstrap';

import logo from './openai.svg';

import MessageForm from './components/MessageForm/MessageForm';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import LoginForm from './components/LoginForm/LoginForm';

import Home from './containers/Home/Home';
import Admin from './containers/Admin/Admin';

import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
	return (
		<React.Fragment>
			
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Header />}>
						<Route index element={<Home />} />
						<Route path='admin' element={<Admin />} />
					</Route>
				</Routes>
			</BrowserRouter>

			<Footer />
			
		</React.Fragment>
	);
}





		{/* <Container className='container-fluid'> */}
			{/* <Navbar bg='dark' variant='dark'> */}
				{/* <Navbar.Brand href='/'>Chat</Navbar.Brand> */}
				{/* <Nav className="mr-auto"> */}
                	{/* <Nav.Link href="/">main</Nav.Link> */}
                	{/* <Nav.Link onSelect={handleAdmin}>login</Nav.Link> */}
            	{/* </Nav> */}
				{/* <Nav.Item>
					<Nav.Link href='/'>Dummy</Nav.Link>
				</Nav.Item> */}
				{/* <Nav.Item>
					<Nav.Link src={logo} width='50' height='50'></Nav.Link>
				</Nav.Item> */}
				{/* <Nav.Item>
					<Nav.Link onSelect={handleAdmin}>Admin Login</Nav.Link>
				</Nav.Item> */}
			{/* </Navbar> */}
  		{/* </Container> */}