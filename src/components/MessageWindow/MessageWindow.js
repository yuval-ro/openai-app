import { Row, Col } from 'react-bootstrap';

const MessageWindow = () => (
	<Row className='mt-5 mb-5 border border-1'>
		<Col>
			<Row className='justify-content-start'>
				<Col className='col-5 border border-primary rounded-1'>
					What is your question?
				</Col>
			</Row>
			<Row className='justify-content-end'>
				<Col className='col-5 border border rounded-2'>
					My Question is... ?
				</Col>
			</Row>
			<Row className='justify-content-start'>
				<Col className='col-5 border border-primary rounded-1'>
					Okay, this is my answer...
				</Col>
			</Row>
		</Col>
	</Row>
)

export default MessageWindow;
