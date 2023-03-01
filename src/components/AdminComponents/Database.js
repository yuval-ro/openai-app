import React, { useState } from 'react'
import { Row, Col, ButtonGroup, Button, Form, Table } from 'react-bootstrap'
import moment from 'moment'

const Database = ({ items, handleDeleteButton, handleDeleteAllButton, handleUpdateButton }) => {
  const [query, setQuery] = useState('')

  const concatStr = (string, len = 45) => {
    if (string.length > len) {
      return `'${string.substring(0, len)}...`
    }
    return `'${string}'`
  }

  const docFilter = (item, filter = '') => {
    // if passed query is substring of prompt or answer:
    return (
      item?.prompt?.toLowerCase().includes(query.toLowerCase())
      ||
      item?.answer?.toLowerCase().includes(query.toLowerCase())
    )
  }

  const renderRows = () => {
    return (
      items.filter(docFilter).map((item, idx) => {
        return (
          <tr key={idx.toString()} id={idx} style={{ 'verticalAlign': 'top' }}>
            <td style={{ 'fontWeight': 'bold' }}>{(idx + 1)}</td>
            <td style={{ 'fontFamily': 'consolas' }}>{concatStr(item?.prompt)}</td>
            <td style={{ 'fontFamily': 'consolas' }}>{concatStr(item?.answer)}</td>
            <td>{moment(item?.date).format('HH:mm:ss-DD/MM/YYYY')}</td>
            <td>
              <ButtonGroup>
                <Button
                  variant='outline-warning'
                  onClick={() => {
                    handleUpdateButton(item?._id, item?.prompt, item?.answer)
                  }}>Update</Button>
                <Button
                  variant='outline-danger'
                  onClick={() => {
                    handleDeleteButton(item?._id)
                  }}>Delete</Button>
              </ButtonGroup>
            </td>
          </tr>
        )
      })
    )
  }

  return (
    <Row>
      <Col className='col-12'>
        <div className='d-flex'>
          <Form className='flex-grow-1'>
            <Form.Control
              type='text'
              placeholder='Find a log...'
              onChange={e => setQuery(e?.target?.value)} />
          </Form>
          <Button
            variant='outline-danger'
            className=''
            onClick={handleDeleteAllButton}>Delete All</Button>
        </div>
      </Col>
      <Col className='col-12' style={{ 'height': '600px', 'overflowY': 'scroll' }}>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Prompt</th>
              <th>Answer</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody style={{ 'backgroundColor': 'white' }}>
            {renderRows()}
          </tbody>
        </Table>
      </Col>
    </Row>
  )
}

export default Database