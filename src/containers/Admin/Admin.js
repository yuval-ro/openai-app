import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button, Form } from 'react-bootstrap';
import { chain, map } from 'lodash';
import moment from 'moment';

import './Admin.css';
import { readAll, readLog, deleteLog } from '../../Api';


const Admin = () => {
	const [query, setQuery] = useState('');
	const [items, setItems] = useState();

	useEffect(() => {
		readAll()
			.then((res) => {
				setItems(res);
			})
			.catch((err) => {
				console.error(err);
			})
	}, [])

	const deleteItem = (id) => {
		deleteLog(id)
			.then(() => {
				readAll()
					.then((res) => {
						setItems(res);
					})
					.catch((err) => {
						console.error(err);
					})
			})
			.catch((err) => {
				console.error(err);
			})
	}

	const updateItem = (id) => {
		// todo: update the item corr. with '_id'
	}

	const renderTableRows = (items, filterBy = '') => {
		return (
			chain(items)
				.filter((item) => {
					// if substring return true:
					return (item?.prompt?.includes(filterBy) || item?.answer?.includes(filterBy));
				})
				.map((item, index) => {
					return (
						<tr id={index}>
							<td>{(index + 1)}</td>
							<td>{item?.prompt}</td>
							<td>{item?.answer}</td>
							<td>{moment(item?.date).format('HH:mm:ss @ DD/MM/YYYY')}</td>
							<td><Button variant='outline-dark' onClick={(item) => updateItem(item?._id)}>Update</Button></td>
							<td><Button variant='outline-danger' onClick={() => deleteItem(item?._id)}>Delete</Button></td>
						</tr>
					)
				})
				.value()
		)
	}

	return (
		<Container className='container-fluid'>
			<Row>
				<Col className='fs-1 my-1 px-0'> Database </Col>
			</Row>

			<Row>
				<Col className='my-1 px-0'>
					<Form>
						<Form.Control
							className='w-50'
							type='text'
							placeholder='Find a log...'
							onChange={(e) => setQuery(e?.target?.value)} />
					</Form>
				</Col>
			</Row>

			<Row>
				<Col className='my-1 px-0'>
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
							{renderTableRows(items, query)}
						</tbody>
					</Table>
				</Col>
			</Row>
		</Container>
	)
}

export default Admin;
