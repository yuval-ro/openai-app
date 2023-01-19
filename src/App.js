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
import Login from './containers/Login/Login';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RequireAuth } from 'react-auth-kit';




const App = () => (
	<React.Fragment>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Header />}>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/admin' element={
						<RequireAuth loginPath={'/login'}>
							<Admin />
						</RequireAuth>
					} />
				</Route>
			</Routes>
		</BrowserRouter>

		<Footer />

	</React.Fragment>
);


export default App;