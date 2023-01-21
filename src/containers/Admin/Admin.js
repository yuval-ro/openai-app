import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button, Form } from 'react-bootstrap';
import { map } from 'lodash';

import './Admin.css';
import { readAll, readLog } from '../../Api';


const Admin = () => {
	const [query, setQuery] = useState('');
	const [items, setItems] = useState();

	// useEffect(() => {
	// 	setItems(
	// 		readAll()
	// 			.then((res) => {
	// 				console.log(res);
	// 				return res;
	// 			})
	// 			.catch((err) => {
	// 				console.error(err);
	// 			})
	// 	);

	// }, [])

	const deleteItem = (id) => {
		console.log(`todo: delete id = ${id}`);
		console.log(`todo: call getAllLogs() to refresh the page`);
	}

	const updateItem = (id) => {
		console.log(`todo: update id = ${id}`);
		console.log(`todo: call getAllLogs() to refresh the page`);
	}

	const renderTableRows = async () => {
		return (
			map(items, (item, index) => {
				return (
					<tr>
						<td>{(index + 1)}</td>
						<td>{item?.prompt}</td>
						<td>{item?.answer}</td>
						<td>{item?.date}</td>
						<td><Button variant='outline-dark' onClick={(item) => deleteItem(item?._id)}>Update</Button></td>
						<td><Button variant='outline-danger' onClick={(item) => updateItem(item?._id)}>Delete</Button></td>
					</tr>
				)
			})
		)
	}

	return (
		<Container className='container-fluid border border-3'>
			<Row className='mt-5 mb-5 border border-1'>
				<Col className='fs-1'>
					Database
				</Col>
			</Row>

			<Row className='mt-5 mb-5 border border-1'>
				<Col>
					<Form>
						<Form.Group controlId=''>
							<Form.Control type='text' placeholder='Find a log...'
								onChange={(e) => setQuery(e?.target?.value)}
							/>
						</Form.Group>
					</Form>
				</Col>
			</Row>

			<Row className='mt-5 mb-5 border border-1'>
				<Col>
					<Table responsive>
						<thead>
							<tr>
								<th>#</th>
								<th>Prompt</th>
								<th>Answer</th>
								<th>Date</th>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{renderTableRows}
						</tbody>
					</Table>
				</Col>
			</Row>
		</Container>
	)
}

export default Admin;
