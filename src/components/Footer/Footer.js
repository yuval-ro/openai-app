import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import Logo from './logo.svg';


const Footer = () => (
	<Container className='container-fluid border border-3'>
		<Row className='mt-5 mb-5 border border-1'>
			<Col>
				<div className='d-flex justify-content-center align-items-center'>
					{/* <div className='text-muted'>© 2023 Company, Inc</div> */}
					<img src={require('./logo.svg').default} width='40' className='filter-dark' />
					{/* <div className='text-muted'>Test</div> */}
				</div>
			</Col>
		</Row>
	</Container>
)

export default Footer;
