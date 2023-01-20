import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './containers/Home/Home';
import Admin from './containers/Admin/Admin';
import Login from './containers/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider, RequireAuth } from 'react-auth-kit';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const App = () => (
	<Container className='container-fluid border'>
		<AuthProvider>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/admin' element={
						<RequireAuth loginPath={'/login'}>
							<Admin />
						</RequireAuth>
					} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</AuthProvider>
	</Container>
);


export default App;