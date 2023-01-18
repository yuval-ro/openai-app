import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';


export default function Database() {
	return (
		<Container className='container-fluid'>
			<Row className=''>
				<Col className='border text-center'>
					<h1>Database Logs</h1>
					<ul>
						<li>
							one
						</li>
						<li>
							two
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	)
}
