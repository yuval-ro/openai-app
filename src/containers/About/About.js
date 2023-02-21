import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const About = () => (
	<Container className='container-fluid'>
		<Row>
			<Col className='fs-1 my-1 px-0'> About Us </Col>
		</Row>
		<Row>
			<Col className='my-1 px-0'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Nulla feugiat ac est ut elementum.
				Maecenas ornare ligula vel ex ullamcorper aliquam.
				Sed sodales eleifend lacus vitae tristique.
				Ut augue urna, pharetra vitae tortor sed, condimentum auctor magna.
				Donec quis diam dui. Sed commodo vel velit nec laoreet.
				Proin ac volutpat augue. Morbi efficitur sagittis ultrices.
				Phasellus tempus eget tellus eget finibus. Aliquam nec neque mauris.
				Fusce efficitur ultricies sem in porttitor.
			</Col>
		</Row>
	</Container>
)

export default About;
