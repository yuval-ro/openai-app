import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import LoginForm from '../components/LoginComponents/LoginForm'

const Login = ({ isLoggedIn, setIsLoggedIn }) => {

  const onSuccessfulLogin = () => {
    setIsLoggedIn(true);
  }

  return (
    <Container className='container-fluid px-0'>
      <Row>
        < Col className='fs-1 my-1' >
          Administrator Login
        </Col >
      </Row >
      <LoginForm onSuccessfulLogin={onSuccessfulLogin} />
    </Container >
  )
}

export default Login;