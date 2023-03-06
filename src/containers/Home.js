import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import Chat from '../components/HomeComponents/Chat'
import davinci from '../assets/davinci.png'

const Home = () => {
  return (
    <Container
      variant='fluid'
      style={{ 'height': '84%' }}>
      <Row
        className='align-content-center'
        style={{
          'flexDirection': 'column',
          'backgroundColor': '#f6f6f6',
          'height': '15%'
        }}>
        <Col className='d-flex flex-column align-items-center'>
          <img src={davinci} style={{ 'width': '50px' }} />
          <p className='mb-0 text-justify' style={{ 'fontWeight': '700' }}>Davinci</p>
        </Col>
        <Col className='col-1'>
        </Col>
      </Row>
      <Chat />
    </Container >
  )
}

export default Home