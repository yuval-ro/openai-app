import React from 'react';
import { Row, Col } from 'react-bootstrap';
import davinci from '../../assets/davinci.png'

const ConverseRow = ({ prompt, answer }) => (
  <React.Fragment>
    <Row className='justify-content-end mt-3 mb-1'>
      <Col
        variant='col-auto'
        className='text-light border border-primary rounded-5 mx-3 text-break p-3'
        style={{
          'fontFamily': 'helvetica',
          'maxWidth': '75%',
          'backgroundColor': '#007AFF'
        }}>
        <div className='fw-bold'>Me</div>
        <div>{prompt}</div>
      </Col>
    </Row>
    <Row className='justify-content-start mt-1 mb-3'>
      <Col
        className='col-auto border border-1 rounded-5 mx-3 text-break p-3'
        style={{
          'fontFamily': 'helvetica',
          'maxWidth': '75%',
          'backgroundColor': '#E9E8EB'
        }}>
        <div className='d-flex align-items-center'>
          <img src={davinci} style={{ 'width': '30px' }}></img>
          <div className='fw-bold'>Davinci</div>
        </div>
        <div>{answer}</div>
      </Col>
    </Row>
  </React.Fragment>
)

export default ConverseRow