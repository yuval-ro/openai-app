import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ConverseRow = ({ prompt, answer }) => (
	<Row className='mt-5 mb-5' >
		<Col>
			<Row className='justify-content-start'>
				<Col className='col-5 border border-primary rounded-1'>
					Q: {prompt}
				</Col>
			</Row>
			<Row className='justify-content-end'>
				<Col className='col-5 border border rounded-2'>
					A: {answer}
				</Col>
			</Row>
		</Col>
	</Row >
)

export default ConverseRow;
