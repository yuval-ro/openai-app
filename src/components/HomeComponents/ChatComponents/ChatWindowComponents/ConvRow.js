import React from 'react';
import { Row, Col } from 'react-bootstrap';
import moment from 'moment'

const ConvRow = ({ prompt, answer, timeStamp }) => (
  <React.Fragment>
    <Row className='justify-content-end my-1'>
      <Col
        className='d-flex flex-column align-items-end col-auto text-light border border-primary rounded-5 text-break p-3'
        style={{
          'maxWidth': '75%',
          'backgroundColor': '#007AFF'
        }}>
        <div>
          {prompt}
        </div>
        <div className='d-flex' style={{ 'fontSize': '12px' }}>
          {moment(timeStamp).format('HH:mm')} ✔
        </div>
      </Col>
    </Row>
    <Row className='justify-content-start my-1'>
      <Col
        className='col-auto border border-1 rounded-5 text-break p-3'
        style={{
          'maxWidth': '75%',
          'backgroundColor': '#E9E8EB'
        }}>
        {answer}
      </Col>
    </Row>
  </React.Fragment>
)

export default ConvRow