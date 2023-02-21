import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ConverseRow = ({ prompt, answer }) => (
	<React.Fragment>

		<Row className='justify-content-end mt-3 mb-1'>
			<Col
				className='col-auto border border-1 rounded-3 mx-3 text-break p-3'
				style={{ 'max-width': '75%' }}
			>
				<div className='fw-bold'>Me</div>
				<div>{prompt}</div>
			</Col>
		</Row>

		<Row className='justify-content-start mt-1 mb-3'>
			<Col
				className='col-auto border border-primary rounded-3 mx-3 text-break p-3'
				style={{ 'max-width': '75%' }}
			>
				<div className='fw-bold'>Davinci</div>
				<div>{answer}</div>
			</Col>
		</Row>

	</React.Fragment>
)

export default ConverseRow;
