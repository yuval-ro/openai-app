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
        <p>
          This is our project for the course;<br />
          The entire source code is original as well as the design!
        </p>
        <p>
          This project consists of a React app as the front-end,
          and an Express server as the back-end.<br />
          Authorized users can login as administrators,
          and observe the logs of previous correspondance made.
        </p>
        <p>
          The main event is chatting with the Davinci model.<br />
          Each prompt will send a request to OpenAI's API endpoint;<br />
          Afterwards, the reponse will be recorded as a log in the Mongo database, then displayed in the chat window.<br />
        </p>
        <p>
          Hope you enjoy your stay, feel free to wander around the site!
        </p>
      </Col>
    </Row>
  </Container>
)

export default About;