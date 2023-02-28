import React, { useState } from 'react'
import { authLogin } from '../../api'
import { Row, Col, Form, Button } from 'react-bootstrap'
import Toast from 'react-bootstrap/Toast'
import { useSignIn } from 'react-auth-kit'
import { useNavigate } from 'react-router-dom'

const LoginForm = ({ onSuccessfulLogin }) => {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [loginToast, setLoginToast] = useState(false)
  const signIn = useSignIn()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    authLogin(user, pass)
      .then((response) => {
        signIn({
          token: response,
          expiresIn: 5, // minutes
          tokenType: 'Bearer',
        });
        navigate('/admin'); // redirect after successfull login
        onSuccessfulLogin()
      })
      .catch((err) => {
        console.error(err)
        setLoginToast(true)
      })
      .finally(() => {
        setUser('')
        setPass('')
      });
  };

  const onUserChange = (e) => {
    setUser(e?.target?.value)
  }
  const onPassChange = (e) => {
    setPass(e?.target?.value)
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
      <Row>
        <Col className='d-flex flex-col my-1 px-0'>
          <Form
            className='w-50'
            onSubmit={handleSubmit}
          >
            <Form.Control
              className='my-1'
              value={user}
              type='text'
              placeholder='Username'
              onChange={e => onUserChange(e)}
            />
            <Form.Control
              className='my-1'
              value={pass}
              type='password'
              placeholder='Password'
              onChange={e => onPassChange(e)}
            />
            <Button
              className='my-1'
              variant='primary'
              type='submit'
            >Login</Button>
          </Form>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default LoginForm