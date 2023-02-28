import axios from 'axios'
import moment from 'moment'

const onSuccess = (action) => {
  console.log(`@${moment(Date.now()).format('HH:mm:ss.ms')}: ${action} SUCCESSED`)
}

const onFail = (action, err) => {
  console.log(`@${moment(Date.now()).format('HH:mm:ss.ms')}: ${action} FAILED`)
  console.error(err)
}

const promptDavinci = async (prompt) => {
  const action = 'prompting davinci for an answer'
  try {
    const res = await axios({
      method: 'post',
      url: 'http://localhost:3001/api/davinci',
      data: { prompt }
    })
    onSuccess(action)
    return res?.data?.answer
  }
  catch (err) {
    onFail(action, err)
    throw err
  }
}

const authLogin = async (user, pass) => {
  const action = 'authorizing login'
  try {
    const res = await axios({
      method: 'post',
      url: 'http://localhost:3001/api/auth',
      data: {
        user: user,
        pass: pass
      }
    })
    onSuccess(action)
    return res?.data?.token
  }
  catch (err) {
    onFail(action, err)
    throw err
  }
}

const createLog = async (prompt, answer) => {
  const action = 'adding log to database'
  try {
    const res = await axios({
      method: 'post',
      url: 'http://localhost:3001/api/create',
      data: {
        prompt: prompt,
        answer: answer
      }
    })
    onSuccess(action)
    return res?.data?.docs
  }
  catch (err) {
    onFail(action, err)
    throw err
  }
}

const readLogs = async () => {
  const action = 'fetching all logs'
  try {
    const res = await axios({
      method: 'post',
      url: 'http://localhost:3001/api/read'
    })
    onSuccess(action)
    return res?.data?.docs
  }
  catch (err) {
    onFail(action, err)
    throw err
  }
}

const updateLog = async (id, prompt, answer) => {
  const action = 'updating a log'
  try {
    const res = await axios({
      method: 'patch',
      url: 'http://localhost:3001/api/update',
      data: {
        id: id,
        prompt: prompt,
        answer: answer
      }
    })
    onSuccess(action)
    return res?.data?.docs
  }
  catch (err) {
    onFail(action, err)
    throw err
  }
}

const deleteLog = async (id) => {
  const action = 'deleting a log'
  try {
    const res = await axios({
      method: 'delete',
      url: 'http://localhost:3001/api/delete',
      data: { id }
    })
    onSuccess(action)
    return res?.data?.docs
  }
  catch (err) {
    onFail(action, err)
    throw err
  }
}

const deleteAllLogs = async () => {
  const action = 'deleting all logs'
  try {
    const res = await axios({
      method: 'delete',
      url: 'http://localhost:3001/api/deleteall'
    })
    onSuccess(action)
    return res?.data?.docs
  }
  catch (err) {
    onFail(action, err)
    throw err
  }
}

export {
  promptDavinci,
  authLogin,
  createLog,
  readLogs,
  updateLog,
  deleteLog,
  deleteAllLogs
}