import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MessageForm from '../components/HomeComponents/MessageForm'
import ConverseRow from '../components/HomeComponents/ConverseRow'
import { map } from 'lodash'

const Home = () => {
  const [conversation, setConversation] = useState(() => {
    const history = localStorage.getItem('conversation');
    const initialValue = JSON.parse(history);
    return initialValue || [];
  })

  const updateConverse = (newConverse) => {
    let oldConverse = conversation
    oldConverse.push(newConverse)
    setConversation([...oldConverse])
    localStorage.setItem(
      'conversation',
      JSON.stringify(conversation)
    )
  }

  const clearConversation = () => {
    setConversation([])
  }

  const renderConversation = () => (
    map(conversation, (item, index) => {
      const { prompt, answer } = item
      return (
        <ConverseRow key={index.toString()} prompt={prompt} answer={answer} />
      )
    })
  )

  return (
    <Container variant='container-fluid'>
      <Row>
        <Col className='fs-1 my-1 px-0'>Chat with Davinci</Col>
      </Row>
      <Row>
        <Col
          className='overflow-auto border border-2 rounded-3 my-1'
          style={{ 'minHeight': '550px' }}>
          {renderConversation()}
        </Col>
      </Row>
      <MessageForm
        updateConverse={updateConverse}
        clearConversation={clearConversation} />
    </Container>
  )
}

export default Home