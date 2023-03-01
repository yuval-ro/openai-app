import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => (
  <Container className='container-fluid'>
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
          This project consists of the React app as the front-end,
          and the Express server as the back-end.<br />
          Authorized users can login as an administrator,
          and observe the logs of previous correspondance with the Davinci model.
        </p>
        <p>
          The main event is chatting with the Davinci model.<br />
          Each "Submit" will send a request to the OpenAI endpoint with the written prompt;<br />
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