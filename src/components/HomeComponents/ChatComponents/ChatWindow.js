import React from 'react'
import { Container } from 'react-bootstrap'

import ConvRow from './ChatWindowComponents/ConvRow'

const ChatWindow = ({ conv }) => {
  const renderRows = () => {
    return (
      conv.map((item, idx) => {
        // one item in conv is comprised of prompt + answer (string) + time-stamp (Date):
        const { prompt, answer, timeStamp } = item
        return (
          // ConvRow will return a Fragment of two BS Rows; 1st Row contains prompt, 2nd Row contains answer:
          <ConvRow key={idx.toString()} prompt={prompt} answer={answer} timeStamp={timeStamp} />
        )
      })
    )
  }

  return (
    <Container
      variant='fluid'
      className='border-top border-2'
      style={{
        'overflowY': 'auto',
        'height': '80%',
        'scrollBehavior': 'smooth',
        'backgroundColor': 'white'
      }}>
      <React.Fragment>
        {renderRows()}
      </React.Fragment>
    </Container>
  )
}

export default ChatWindow