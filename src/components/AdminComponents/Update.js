import React, { useState } from 'react'
import { Row, Form, Button } from 'react-bootstrap'

const Update = ({ handleUpdateSubmit, selectedLogPrompt, selectedLogAnswer }) => {
  const [prompt, setPrompt] = useState('');
  const [answer, setAnswer] = useState('');

  const onButtonClick = async () => {
    await handleUpdateSubmit(prompt, answer)
    setPrompt('')
    setAnswer('')
  }

  return (
    <Row className='mt-2'>
      <Form>
        <Form.Control
          className='mb-1'
          value={prompt}
          type='text'
          placeholder={selectedLogPrompt}
          onChange={e => setPrompt(e?.target?.value)}
          required />
        <Form.Control
          className='mb-1'
          value={answer}
          type='text'
          placeholder={selectedLogAnswer}
          onChange={e => setAnswer(e?.target?.value)}
          required />
        <Button
          className='my-1'
          variant='primary'
          onClick={onButtonClick}>Update</Button>
      </Form>
    </Row>
  )
}

export default Update
