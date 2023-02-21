import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import Logo from './logo.svg';


const Footer = () => (
	<Container className='container-fluid'>
		<Row className='mt-1 border-top border-2'>
			<Col className='d-flex justify-content-center align-items-center'>
				<img
					className='filter-dark m-3'
					src={require('./logo.svg').default}
					width='40'
				/>
			</Col>
		</Row>
	</Container>
)

export default Footer;
