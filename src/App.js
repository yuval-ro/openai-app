import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './containers/Home/Home';
import Admin from './containers/Admin/Admin';
import Login from './containers/Login/Login';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RequireAuth } from 'react-auth-kit';

import { Container } from 'react-bootstrap'


const App = () => (
	<Container className='container-fluid border'>
		<BrowserRouter>
			<Header />

			<Routes>
				<Route>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/admin' element={
						<RequireAuth loginPath={'/login'}>
							<Admin />
						</RequireAuth>
					} />
				</Route>
			</Routes>

			<Footer />
		</BrowserRouter>
	</Container>
);


export default App;