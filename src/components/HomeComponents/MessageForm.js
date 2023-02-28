import React, { useState } from 'react';
import { promptDavinci } from '../../api';
import { Row, Col, Form, Button } from 'react-bootstrap';

const MessageForm = ({ updateConverse, clearConversation }) => {
  const [currentPrompt, setCurrentPrompt] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await promptDavinci(currentPrompt)
      updateConverse({
        prompt: currentPrompt,
        answer: res
      })
      setCurrentPrompt('')
    }
    catch (err) {
      console.error(err)
    }
  }

  return (
    <Row>
      <Col className='d-flex my-1 px-0'>
        <Form
          className='d-flex col-9'
          onSubmit={handleSubmit}>
          <Form.Control className=''
            value={currentPrompt}
            type='text'
            placeholder='Ask me anything...'
            onChange={e => setCurrentPrompt(e?.target?.value)}
            required />
          <Button
            className='mx-1'
            variant='primary'
            type='submit'>Submit</Button>
        </Form>
        <Button
          className='ms-auto'
          variant='outline-danger'
          onClick={() => { clearConversation() }}>Clear</Button>
      </Col>
    </Row>
  )
}

export default MessageForm