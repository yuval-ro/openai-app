import React from 'react';
import { Row, Col } from 'react-bootstrap';
import davinci from '../../assets/davinci.png'
import me from '../../assets/me.png'

const ConvRow = ({ prompt, answer }) => (
  <React.Fragment>
    <Row className='justify-content-end my-1'>
      <Col
        className='col-auto text-light border border-primary rounded-5 text-break p-3'
        style={{
          'fontFamily': 'helvetica',
          'maxWidth': '75%',
          'backgroundColor': '#007AFF'
        }}>
        <div className='d-flex flex-row-reverse align-items-center'>
          <img src={me} style={{ 'width': '25px' }}></img>
          <div className='ms-1 fw-bold'>Me</div>
        </div>
        <div>{prompt}</div>
      </Col>
    </Row>
    <Row className='justify-content-start my-1'>
      <Col
        className='col-auto border border-1 rounded-5 text-break p-3'
        style={{
          'fontFamily': 'helvetica',
          'maxWidth': '75%',
          'backgroundColor': '#E9E8EB'
        }}>
        <div className='d-flex flex-row align-items-center'>
          <img src={davinci} style={{ 'width': '30px' }}></img>
          <div className='ms-1 fw-bold'>Davinci</div>
        </div>
        <div>{answer}</div>
      </Col>
    </Row>
  </React.Fragment>
)

export default ConvRow