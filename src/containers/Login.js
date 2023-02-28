import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import LoginForm from '../components/LoginComponents/LoginForm'

const Login = ({ isLoggedIn, setIsLoggedIn }) => {

  const onSuccessfulLogin = () => {
    setIsLoggedIn(true);
  }

  return (
    <Container variant='fluid'>
      <Row>
        <Col className='fs-2' >
          Administrator Login
        </Col >
      </Row >
      <LoginForm onSuccessfulLogin={onSuccessfulLogin} />
    </Container >
  )
}

export default Login;