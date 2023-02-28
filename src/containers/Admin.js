import React, { useState, useEffect } from 'react'
import { Container, Button, ButtonGroup, Tabs, Tab } from 'react-bootstrap'
import { chain } from 'lodash'
import moment from 'moment'

import { readLogs, deleteLog, createLog, updateLog, deleteAllLogs } from '../api'
import Items from '../components/AdminComponents/Items'
import Create from '../components/AdminComponents/Create'
import Update from '../components/AdminComponents/Update'

const Admin = () => {
  const [query, setQuery] = useState('')
  const [items, setItems] = useState()
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

  const renderTableRows = (items, filterBy = '') => {
    return (
      chain(items)
        .filter(item => {
          return (item?.prompt?.includes(filterBy) || item?.answer?.includes(filterBy)) // if substring
        })
        .map((item, index) => {
          return (
            <tr key={index.toString()} id={index} style={{ 'verticalAlign': 'middle' }}>
              <td style={{ "fontWeight": "bold" }}>{(index + 1)}</td>
              <td>"{item?.prompt}"</td>
              <td>"{item?.answer}"</td>
              <td>{moment(item?.date).format('HH:mm:ss @ DD/MM/YYYY')}</td>
              <td>
                <ButtonGroup>
                  <Button
                    variant='outline-warning'
                    onClick={() => {
                      handleUpdateButton(item?._id, item?.prompt, item?.answer)
                    }}>Update</Button>
                  <Button
                    variant='outline-danger'
                    onClick={() => {
                      handleDeleteButton(item?._id)
                    }}>Delete</Button>
                </ButtonGroup>
              </td>
            </tr>
          )
        })
        .value()
    )
  }

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
    <Container variant='fluid'>
      <Tabs
        activeKey={activeTab}
        onSelect={tab => setActiveTab(tab)}>
        <Tab eventKey='database' title='Database Logs'>
          <Items
            handleDeleteAllButton={handleDeleteAllButton}
            setQuery={setQuery}
            renderTableRows={renderTableRows}
            items={items}
            query={query} />
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
      </Tabs>
    </Container>
  )
}

export default Admin