import React, { Component } from 'react'
import { Row, Col, Form, Table } from 'react-bootstrap'

export class Items extends Component {
  render() {
    return (
      <Row className='mt-2'>
        <Col className='col-12'>
          <Form>
            <Form.Control
              className=''
              type='text'
              placeholder='Find a log...'
              onChange={e => this.props.setQuery(e?.target?.value)} />
          </Form>
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
              {this.props.renderTableRows(this.props.items, this.props.query)}
            </tbody>
          </Table>
        </Col>
      </Row>
    )
  }
}

export default Items
