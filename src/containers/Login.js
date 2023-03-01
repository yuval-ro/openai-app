import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import LoginForm from '../components/LoginComponents/LoginForm'

const Login = ({ setIsLoggedIn }) => {
  return (
    <Container
      variant='fluid'
      style={{ 'height': '84%' }}>
      <Row>
        <Col className='fs-2' >
          Administrator Login
        </Col >
      </Row >
      <LoginForm onSuccessfulLogin={setIsLoggedIn(true)} />
    </Container >
  )
}

export default Login;