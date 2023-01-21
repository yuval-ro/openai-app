import React, { useState } from 'react';
import { authLogin } from '../../Api';
import './LoginForm.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import { useSignIn } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';


const LoginForm = (props) => {
	const [user, setUser] = useState('');
	const [pass, setPass] = useState('');
	const [loginToast, setLoginToast] = useState(false);
	const signIn = useSignIn();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		authLogin(user, pass)
			.then((response) => {
				signIn({
					token: response,
					expiresIn: 5, // minutes
					tokenType: 'Bearer',
				});
				console.log(props);
				navigate('/admin'); // redirect after successfull login
				props.onSuccessfulLogin();
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
			<Row className='mt-5 mb-5 border border-1'>
				<Col>
					<Form onSubmit={handleSubmit}>
						<Form.Group>
							<Form.Control type='text' placeholder='Username' value={user} onChange={e => onUserChange(e)}></Form.Control>
						</Form.Group>
						<Form.Group>
							<Form.Control type='password' placeholder='Password' value={pass} onChange={e => onPassChange(e)}></Form.Control>
						</Form.Group>
						<Button variant='primary' type='submit'>Login</Button>
					</Form>
				</Col>
			</Row>
		</React.Fragment>

	);
}

export default LoginForm;