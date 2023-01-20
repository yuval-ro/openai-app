import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { getAllLogs } from '../../Api';
import { map } from 'lodash';

const Database = () => {
	const [listOfLogs, setListOfLogs] = useState([]);

	useEffect(() => {
		console.log('useEffect() called:');
		getAllLogs()
			.then((res) => {
				console.log(res);
				setListOfLogs(res);
			})
			.catch((err) => {
				console.error(err);
			})
	}, [])

	const deleteItem = (id) => {
		console.log(`todo: delete id = ${id}`);
		console.log(`todo: call getAllLogs() to refresh the page`);
	}

	const renderTableRows = (rowItems) => {
		return map(rowItems, (item, index) => {
			return (
				<tr>
					<td>{(index + 1)}</td>
					<td>{item?.date}</td>
					<td>{item?.prompt}</td>
					<td>{item?.answer}</td>
					<td><Button onClick={(item) => deleteItem(item?._id)}>Delete</Button></td>
				</tr>
			)
		})
	}

	return (
		<Container className='container-fluid'>
			<Row className=''>
				<Col className='border'>
					<Button>Delete All</Button>
				</Col>
			</Row>
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
								<th>Prompt</th>
								<th>Answer</th>
							</tr>
						</thead>
						<tbody>
							{renderTableRows(listOfLogs)}
						</tbody>
					</Table>
				</Col>
			</Row>
		</Container>
	)
}

export default Database;