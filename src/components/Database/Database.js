import React, { useState } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap';


const Database = () => {
	const [listOfLogs, setlistOfLogs] = useState([]);

	return (
		<Container className='container-fluid'>
			<Row className=''>
				<Col className='border text-center'>
					<h1>
						Database Logs
					</h1>
					<Table responsive>
						<thead>
							<tr>
								<th>#</th>
								<th>Date</th>
								<th>Question</th>
								<th>Answer</th>
							</tr>
						</thead>
					</Table>
				</Col>
			</Row>
		</Container>
	)
}

export default Database;