import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const DBController = () => {
	// V these need to be moved to it's parent!
	const [query, setQuery] = useState(''); // search a log by ?

	const onQueryFormChange = (e) => {
		setQuery(e?.target?.value);
	}
	// /\

	return (
		<Container className='container-fluid border'>
			<Row>
				<Col>
					<div className='d-flex justify-content-between align-items-center'>
						<div className='d-flex justify-content-between align-items-center'>
							<Form>
								<Form.Group controlId=''>
									<Form.Control type='text' placeholder='Find a log...'
										value={query}
										onChange={e => onQueryFormChange(e)}></Form.Control>
								</Form.Group>
							</Form>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	)
}

export default DBController;