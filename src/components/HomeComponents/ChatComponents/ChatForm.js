import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ButtonGroup } from 'react-bootstrap';

import { promptDavinci } from '../../../api';

const ChatForm = ({ updateConv, clearConv, deleteConv }) => {
  const [currentPrompt, setCurrentPrompt] = useState('')

  const handlePromptSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await promptDavinci(currentPrompt)
      const ts = Date.now()
      updateConv({
        prompt: currentPrompt,
        answer: res,
        timeStamp: ts
      })
      setCurrentPrompt('')
    }
    catch (err) {
      console.error(err)
    }
  }

  return (
    <Container
      variant='fluid'
      style={{ 'height': '15%' }}>
      <Row>
        <Col>
          <Form
            className='d-flex flex-row'
            onSubmit={handlePromptSubmit}>
            <Form.Control
              className='rounded-pill border border-2'
              value={currentPrompt}
              type='text'
              placeholder='Ask Davinci...'
              onChange={e => setCurrentPrompt(e?.target?.value)}
              required />
            <Button
              variant='primary'
              className='rounded-circle ms-1'
              type='submit'>⮝</Button>
          </Form>
        </Col>
        <Col className='col-auto ps-0'>
          <ButtonGroup
            className='rounded-pill'>
            <Button
              variant='outline-warning'
              onClick={() => { clearConv() }}>Clear</Button>
            <Button
              variant='outline-danger'
              onClick={() => { deleteConv() }}>Delete</Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default ChatForm