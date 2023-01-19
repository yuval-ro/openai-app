import React, { useState } from 'react';
import { authLogin } from '../../Client';

import './LoginForm.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import { useSignIn } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';



const LoginForm = () => {
	const [user, setUser] = useState('');
	const [pass, setPass] = useState('');
	const [loginToast, setLoginToast] = useState(false);
	const signin = useSignIn();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		authLogin(user, pass)
			.then((response) => {
				signin({
					token: response,
					expiresIn: 3600,
					tokenType: 'Bearer',
					authState: 'admin'
				});
				navigate('/admin'); // redirect after successfull login
			})
			.catch((err) => {
				console.error(err);
				setLoginToast(true);
			})
			.finally(() => {
				setUser('');
				setPass('');
			});
	};

	const onUserChange = (e) => {
		setUser(e?.target?.value);
	}
	const onPassChange = (e) => {
		setPass(e?.target?.value);
	}

	return (
		<React.Fragment>
			<Toast onClose={() => setLoginToast(false)} show={loginToast}>
				<Toast.Header>
					<strong className="me-auto"></strong>
				</Toast.Header>
				<Toast.Body>
					Login credentials are incorrect.
				</Toast.Body>
			</Toast>
			<Container className='container-fluid'>
				<Row className=''>
					<Col className='border'>
						<Form className='' onSubmit={handleSubmit}>
							<Form.Label>
								<h2>Administrator Login</h2>
							</Form.Label>
							<Form.Group className='' controlId=''>
								<Form.Control type='text' placeholder='Username' value={user} onChange={e => onUserChange(e)}></Form.Control>
							</Form.Group>
							<Form.Group className='' controlId=''>
								<Form.Control type='password' placeholder='Password' value={pass} onChange={e => onPassChange(e)}></Form.Control>
							</Form.Group>
							<Button variant='primary' type='submit'>Login</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</React.Fragment>

	);
}

export default LoginForm;