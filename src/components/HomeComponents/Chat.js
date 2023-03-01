import React, { useState } from 'react'
import ChatWindow from './ChatComponents/ChatWindow'
import ChatForm from './ChatComponents/ChatForm'

const Chat = ({ }) => { // comprised of ChatWindow & ChatForm
  const [conv, setConv] = useState(() => {
    let convHistory = localStorage.getItem('conv')
    convHistory = JSON.parse(convHistory)
    return (convHistory || [])
  })

  const updateConv = (updatedConv) => {
    let oldConv = conv
    oldConv.push(updatedConv)
    setConv([...oldConv])
    localStorage.setItem('conv', JSON.stringify(conv))
  }

  const clearConv = () => {
    setConv([])
  }

  const deleteConv = () => {
    setConv([])
    localStorage.clear()
  }

  return (
    <React.Fragment>
      <ChatWindow
        conv={conv} />
      <ChatForm
        updateConv={updateConv}
        clearConv={clearConv}
        deleteConv={deleteConv} />
    </React.Fragment>
  )
}

export default Chat