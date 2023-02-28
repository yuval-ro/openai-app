import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PromptForm from '../components/HomeComponents/PromptForm'
import ConvRow from '../components/HomeComponents/ConvRow'
import { map } from 'lodash'

const Home = () => {
  const [conv, setConv] = useState(() => {
    const history = localStorage.getItem('conv')
    const init = JSON.parse(history)
    return init || []
  })

  const updateConv = (updatedConv) => {
    let oldConv = conv
    oldConv.push(updatedConv)
    setConv([...oldConv])
    localStorage.setItem(
      'conv',
      JSON.stringify(conv)
    )
  }

  const clearConv = () => {
    setConv([])
  }

  const deleteConv = () => {
    setConv([])
    localStorage.clear()
  }

  const renderConv = () => (
    map(conv, (item, index) => {
      const { prompt, answer } = item
      return (
        <ConvRow key={index.toString()} prompt={prompt} answer={answer} />
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
          {renderConv()}
        </Col>
      </Row>
      <PromptForm
        updateConv={updateConv}
        clearConv={clearConv}
        deleteConv={deleteConv} />
    </Container>
  )
}

export default Home