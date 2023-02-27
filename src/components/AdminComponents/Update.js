import React, { useState } from 'react'
import { Row, Form, Button } from 'react-bootstrap'

const Update = ({ handleUpdateSubmit, selectedLogPrompt, selectedLogAnswer }) => {
  const [prompt, setPrompt] = useState('');
  const [answer, setAnswer] = useState('');

  return (
    <Row className='mt-2'>
      <Form
        className=''
        onSubmit={handleUpdateSubmit}>
        <Form.Control
          className='my-1'
          value={prompt}
          type='text'
          placeholder={selectedLogPrompt}
          onChange={e => setPrompt(e?.target?.value)}
          required />
        <Form.Control
          className='my-1'
          value={answer}
          type='text'
          placeholder={selectedLogAnswer}
          onChange={e => setAnswer(e?.target?.value)}
          required />
        <Button
          className='my-1'
          variant='primary'
          type='submit'>Update</Button>
      </Form>
    </Row>
  )
}

export default Update
