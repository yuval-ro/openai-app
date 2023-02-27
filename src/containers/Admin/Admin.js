import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Table, Button, Form, ButtonGroup, Tabs, NavItem, Tab } from 'react-bootstrap'
import { chain, map } from 'lodash'
import moment from 'moment'
import './Admin.css'
import { readAll, deleteLog, createLog, updateLog } from '../../Api'


const Admin = () => {
	const [query, setQuery] = useState('');
	const [items, setItems] = useState();
	const [prompt, setPrompt] = useState('');
	const [answer, setAnswer] = useState('');
	const [selectedLog, setSelectedLog] = useState({ id: '', prompt: '', answer: '' });
	const [activeTab, setActiveTab] = useState('database')

	useEffect(() => {
		readAll()
			.then((res) => {
				setItems(res);
			})
			.catch((err) => {
				console.error(err);
			})
	}, [])

	const refreshLogs = () => {
		readAll()
			.then(res => {
				setItems(res)
			})
	}

	const deleteItem = (id) => {
		deleteLog(id)
		refreshLogs()
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
						<tr id={index} style={{ 'vertical-align': 'middle' }}>
							<td>{(index + 1)}</td>
							<td>{item?.prompt}</td>
							<td>{item?.answer}</td>
							<td>{moment(item?.date).format('HH:mm:ss @ DD/MM/YYYY')}</td>
							<td>
								<ButtonGroup>
									<Button classname=''
										eventKey='update'
										variant='outline-warning'
										onClick={() => handleUpdateButton(item?._id, item?.prompt, item?.answer)}>Update</Button>
									<Button classname=''
										variant='outline-danger'
										onClick={() => deleteItem(item?._id)}>Delete</Button>
								</ButtonGroup>
							</td>
						</tr>
					)
				})
				.value()
		)
	}

	const onPromptChange = (e) => {
		setPrompt(e?.target?.value)
	}

	const onAnswerChange = (e) => {
		setAnswer(e?.target?.value)
	}

	const handleCreateSubmit = (e) => {
		e.preventDefault()
		createLog(prompt, answer)
			.then(() => {
				refreshLogs()
				setPrompt('')
				setAnswer('')
				setActiveTab('database')
			})
	}

	const handleUpdateButton = (selectedId, selectedPrompt, selectedAnswer) => {
		setSelectedLog({
			id: selectedId,
			prompt: selectedPrompt,
			answer: selectedAnswer
		})
		setActiveTab('update')
	};

	const handleUpdateLogSubmit = async (e) => {
		e.preventDefault()
		try {
			updateLog(selectedLog.id, prompt, answer)
			await refreshLogs()
			setActiveTab('database')
		}
		catch (err) {
			console.error(err)
		}
	}

	return (
		<Container className='container-fluid px-0'>
			<Tabs
				activeKey={activeTab}
				onSelect={tab => setActiveTab(tab)}
				className=''>
				<Tab eventKey='database'
					title='Database Logs'>
					<Row className='mt-2'>
						<Col className='col-12'>
							<Form>
								<Form.Control
									className=''
									type='text'
									placeholder='Find a log...'
									onChange={(e) => setQuery(e?.target?.value)} />
							</Form>
						</Col>
						<Col className='col-12'>
							<Table responsive>
								<thead>
									<tr style={{ 'vertical-align': 'middle' }}>
										<th>#</th>
										<th>Prompt</th>
										<th>Answer</th>
										<th>Date</th>
										<th>Actions</th>
									</tr>
								</thead>
								<tbody>
									{renderTableRows(items, query)}
								</tbody>
							</Table>
						</Col>
					</Row>
				</Tab>
				<Tab eventKey='create' title='Create Log'>
					<Row className='mt-2'>
						<Form
							className=''
							onSubmit={handleCreateSubmit}>
							<Form.Control
								className='my-1'
								value={prompt}
								type='text'
								placeholder='Prompt'
								onChange={e => onPromptChange(e)}
								required />
							<Form.Control
								className='my-1'
								value={answer}
								type='text'
								placeholder='Answer'
								onChange={e => onAnswerChange(e)}
								required />
							<Button
								className='my-1'
								variant='primary'
								type='submit'
							>Submit</Button>
						</Form>
					</Row>
				</Tab>
				<Tab eventKey='update' title='Update Log' disabled>
					<Row className='mt-2'>
						<Form
							className=''
							onSubmit={handleUpdateLogSubmit}>
							<Form.Control
								className='my-1'
								value={prompt}
								type='text'
								placeholder={selectedLog.prompt}
								onChange={e => onPromptChange(e)}
								required />
							<Form.Control
								className='my-1'
								value={answer}
								type='text'
								placeholder={selectedLog.answer}
								onChange={e => onAnswerChange(e)}
								required />
							<Button
								className='my-1'
								variant='primary'
								type='submit'
							>Update Log</Button>
						</Form>
					</Row>
				</Tab>
			</Tabs>
		</Container>
	)
}

export default Admin;
