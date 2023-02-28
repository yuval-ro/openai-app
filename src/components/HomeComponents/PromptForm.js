import React, { useState } from 'react';
import { promptDavinci } from '../../api';
import { Row, Col, Form, Button, ButtonGroup } from 'react-bootstrap';

const PromptForm = ({ updateConv, clearConv, deleteConv }) => {
  const [currentPrompt, setCurrentPrompt] = useState('')

  const handlePromptSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await promptDavinci(currentPrompt)
      updateConv({
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
      <Col className='d-flex my-2 me-1 ps-1 align-items-center'>
        <Form
          className='d-flex col-9'
          onSubmit={handlePromptSubmit}>
          <Form.Control className=''
            value={currentPrompt}
            type='text'
            placeholder='Ask Davinci something...'
            onChange={e => setCurrentPrompt(e?.target?.value)}
            required />
          <Button
            variant='primary'
            type='submit'>Submit</Button>
        </Form>
        <ButtonGroup className='ms-auto'>
          <Button
            variant='outline-warning'
            onClick={() => { clearConv() }}>Clear</Button>
          <Button
            variant='outline-danger'
            onClick={() => { deleteConv() }}>Delete</Button>
        </ButtonGroup>
      </Col>
    </Row>
  )
}

export default PromptForm