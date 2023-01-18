import React, { useState } from 'react';
import { authLogin } from '../../Client';

import './LoginForm.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';



const LoginForm = () => {
	const [user, setUser] = useState('');
	const [pass, setPass] = useState('');
	const [auth, setAuth] = useState(false);
	const [loginToast, setLoginToast] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		authLogin(user, pass)
			.then((response) => {
				if (response === true) {
					setAuth(true)
				}
				else {
					console.log('nay');
					setUser('');
					setPass('');
					setLoginToast(true);
				}
			})
			.catch((err) => {
				console.error(err);
			});
	};

	const onUserChange = e => {
		setUser(e?.target?.value);
	}
	const onPassChange = e => {
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