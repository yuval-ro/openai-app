import React, { Component } from 'react'
import { Row, Col, Form, Button, Table } from 'react-bootstrap'

const Items = ({ items, query, setQuery, handleDeleteAllButton, renderTableRows }) => {
  return (
    <Row className='mt-2'>
      <Col className='d-flex col-12'>
        <Form className='w-75'>
          <Form.Control
            className=''
            type='text'
            placeholder='Find a log...'
            onChange={e => setQuery(e?.target?.value)} />
        </Form>
        <Button
          className='w-5 ms-auto'
          variant='outline-danger'
          onClick={handleDeleteAllButton}>
          Delete All
        </Button>
      </Col>
      <Col className='col-12'>
        <Table responsive>
          <thead>
            <tr style={{ 'verticalAlign': 'middle' }}>
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
  )
}

export default Items