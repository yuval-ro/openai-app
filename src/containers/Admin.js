import React, { useState, useEffect } from 'react'
import { Container, Tabs, Tab } from 'react-bootstrap'

import { readLogs, deleteLog, createLog, updateLog, deleteAllLogs } from '../api'
import Database from '../components/AdminComponents/Database'
import Create from '../components/AdminComponents/Create'
import Update from '../components/AdminComponents/Update'

const Admin = () => {
  const [items, setItems] = useState([])
  const [selectedLog, setSelectedLog] = useState({ id: '', prompt: '', answer: '' })
  const [activeTab, setActiveTab] = useState('database')

  useEffect(() => {
    const init = async () => {
      try {
        const freshItems = await readLogs()
        setItems(freshItems)
      }
      catch (err) {
        console.error(err)
      }
    }
    init()
  }, [])

  const handleDeleteAllButton = async () => {
    try {
      const freshItems = await deleteAllLogs()
      setItems(freshItems)
    }
    catch (err) {
      console.error(err)
    }
  }

  const handleDeleteButton = async (id) => {
    try {
      const freshItems = await deleteLog(id)
      setItems(freshItems)
    }
    catch (err) {
      console.error(err)
    }
  }

  const handleCreateSubmit = async (prompt, answer) => {
    try {
      const freshItems = await createLog(prompt, answer)
      setItems(freshItems)
    }
    catch (err) {
      console.error(err)
    }
    finally {
      setActiveTab('database')
    }
  }

  const handleUpdateSubmit = async (newPrompt, newAnswer) => {
    try {
      const freshItems = await updateLog(selectedLog.id, newPrompt, newAnswer)
      setItems(freshItems)
    }
    catch (err) {
      console.error(err)
    }
    finally {
      setActiveTab('database')
    }
  }

  const handleUpdateButton = (selectedId, selectedPrompt, selectedAnswer) => {
    setSelectedLog({
      id: selectedId,
      prompt: selectedPrompt,
      answer: selectedAnswer
    })
    setActiveTab('update')
  }

  return (
    <Container variant='fluid' style={{ 'height': '84%' }}>
      <Tabs
        activeKey={activeTab}
        onSelect={tab => setActiveTab(tab)}>
        <Tab eventKey='database' title='Database Logs'>
          <Database
            items={items}
            handleDeleteButton={handleDeleteButton}
            handleDeleteAllButton={handleDeleteAllButton}
            handleUpdateButton={handleUpdateButton}
          />
        </Tab>
        <Tab eventKey='create' title='Create Log'>
          <Create handleCreateSubmit={handleCreateSubmit} />
        </Tab>
        <Tab eventKey='update' title='Update Log' disabled>
          <Update
            handleUpdateSubmit={handleUpdateSubmit}
            selectedLogPrompt={selectedLog.prompt}
            selectedLogAnswer={selectedLog.answer} />
        </Tab>
      </Tabs >
    </Container>
  )
}

export default Admin