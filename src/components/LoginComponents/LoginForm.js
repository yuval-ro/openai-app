import React, { useState } from 'react'
import { authLogin } from '../../api'
import { Row, Col, Form, Button, Alert, Fade } from 'react-bootstrap'
import { useSignIn } from 'react-auth-kit'
import { useNavigate } from 'react-router-dom'

const LoginForm = ({ onSuccessfulLogin }) => {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [loginAlert, setLoginAlert] = useState(false)
  const signIn = useSignIn()
  const navigate = useNavigate()

  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await authLogin(user, pass)
      signIn({
        token: res,
        expiresIn: 5, // minutes
        tokenType: 'Bearer',
      })
      navigate('/admin'); // redirect after successfull login
      onSuccessfulLogin()
    }
    catch (err) {
      console.error(err)
      setLoginAlert(true)
    }
    finally {
      setUser('')
      setPass('')
    }
  }

  return (
    <React.Fragment>
      <Row>
        <Col>
          <Alert
            onClose={() => setLoginAlert(false)}
            show={loginAlert}
            variant='danger'
            dismissible>
            Login credentials are incorrect.
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleLoginSubmit}>
            <Form.Control
              className='my-1'
              value={user}
              type='text'
              placeholder='Username'
              onChange={e => setUser(e?.target?.value)}
              required />
            <Form.Control
              className='my-1'
              value={pass}
              type='password'
              placeholder='Password'
              onChange={e => setPass(e?.target?.value)}
              required />
            <Button
              className='my-1'
              variant='primary'
              type='submit'>Login</Button>
          </Form>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default LoginForm