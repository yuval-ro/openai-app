import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => (
  <Container
    variant='fluid'
    style={{
      'height': '84%',
      'backgroundColor': 'white'
    }}>
    <Row>
      <Col className='fs-2'>About</Col>
    </Row>
    <Row>
      <Col>
        About this app...
      </Col>
    </Row>
  </Container>
)

export default About;