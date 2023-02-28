import React, { useState } from 'react'
import { Row, Form, Button } from 'react-bootstrap'

const Create = ({ handleCreateSubmit }) => {
  const [prompt, setPrompt] = useState('');
  const [answer, setAnswer] = useState('');

  const onButtonClick = async () => {
    await handleCreateSubmit(prompt, answer)
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
          placeholder='Prompt'
          onChange={e => setPrompt(e?.target?.value)}
          required />
        <Form.Control
          className='mb-1'
          value={answer}
          type='text'
          placeholder='Answer'
          onChange={e => setAnswer(e?.target?.value)}
          required />
        <Button
          className='my-1'
          variant='primary'
          onClick={onButtonClick}>Create</Button>
      </Form>
    </Row>
  )

}

export default Create
