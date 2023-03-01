import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'

const Footer = () => (
  <Container
    variant='fluid'
    className=''
    style={{
      'height': '8%',
      'backgroundColor': '#f6f6f6'
    }}>
    <Row className='border-top border-2'>
      <Col className='d-flex justify-content-center align-items-center'>
        <img
          className='filter-dark m-1'
          src={require('../../assets/logo.svg').default}
          width='40' />
      </Col>
    </Row>
  </Container>
)

export default Footer