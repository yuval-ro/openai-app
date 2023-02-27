import React, { useState, useEffect } from 'react'
import { Container, Row, Button, Form, ButtonGroup, Tabs, Tab } from 'react-bootstrap'
import { chain } from 'lodash'
import moment from 'moment'
import './Admin.css'
import { readAll, deleteLog, createLog, updateLog } from '../../Api'
import Items from '../../components/AdminComponents/Items'
import Create from '../../components/AdminComponents/Create'
import Update from '../../components/AdminComponents/Update'


const Admin = () => {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState();
  const [prompt, setPrompt] = useState('');
  const [answer, setAnswer] = useState('');
  const [selectedLog, setSelectedLog] = useState({ id: '', prompt: '', answer: '' });
  const [activeTab, setActiveTab] = useState('database')

  useEffect(() => {
    const init = async () => {
      try {
        await refreshItems()
      }
      catch (err) {
        console.error(err)
      }
    }
    init()
  }, [])

  // functions:
  const refreshItems = async () => {
    try {
      const res = await readAll()
      setItems(res)
    }
    catch (err) {
      console.error(err)
    }
  }

  const renderTableRows = (items, filterBy = '') => (
    chain(items)
      .filter((item) => {
        // if substring return true:
        return (item?.prompt?.includes(filterBy) || item?.answer?.includes(filterBy));
      })
      .map((item, index) => {
        return (
          <tr id={index} style={{ 'vertical-align': 'middle' }}>
            <td>{(index + 1)}</td>
            <td>{item?.prompt}</td>
            <td>{item?.answer}</td>
            <td>{moment(item?.date).format('HH:mm:ss @ DD/MM/YYYY')}</td>
            <td>
              <ButtonGroup>
                <Button classname=''
                  eventKey='update'
                  variant='outline-warning'
                  onClick={() => handleUpdateButton(item?._id, item?.prompt, item?.answer)}>Update</Button>
                <Button classname=''
                  variant='outline-danger'
                  onClick={() => handleDeleteButton(item?._id)}>Delete</Button>
              </ButtonGroup>
            </td>
          </tr>
        )
      })
      .value()
  )

  // async handlers:
  const handleDeleteButton = async (id) => {
    try {
      await Promise.all(
        deleteLog(id),
        refreshItems()
      )
    }
    catch (err) {
      console.error(err)
    }
  }

  const handleCreateSubmit = async (e) => {
    e.preventDefault()
    try {
      await Promise.all(
        createLog(prompt, answer),
        refreshItems()
      )
      setPrompt('')
      setAnswer('')
      setActiveTab('database')
    }
    catch (err) {
      console.error(err)
    }
  }

  const handleUpdateSubmit = async (e) => {
    e.preventDefault()
    try {
      Promise.all(
        updateLog(selectedLog.id, prompt, answer),
        refreshItems()
      )
      setActiveTab('database')
    }
    catch (err) {
      console.error(err)
    }
  }

  // other handlers:
  const handleUpdateButton = (selectedId, selectedPrompt, selectedAnswer) => {
    setSelectedLog({
      id: selectedId,
      prompt: selectedPrompt,
      answer: selectedAnswer
    })
    setActiveTab('update')
  }

  return (
    <Container className='container-fluid px-0'>
      <Tabs
        activeKey={activeTab}
        onSelect={tab => setActiveTab(tab)}
        className=''>
        <Tab eventKey='database' title='Database Logs'>
          <Items
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

export default Admin;
