import axios from 'axios'

const onSuccess = (action) => {
  console.log(`${action} SUCCESSED`)
}

const onFail = (action, err) => {
  console.log(`${action} FAILED`)
  console.error(err)
}

const promptDavinci = async (prompt) => {
  const action = '@Api.js: sending prompt to davinci then recieving answer'
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
  }
}

const authLogin = async (user, pass) => {
  const action = '@Api.js: admin authorization'
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
  }
}

const createLog = async (prompt, answer) => {
  const action = '@Api.js: creating log and adding to database'
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
  }
}

const readLogs = async () => {
  const action = '@Api.js: reading all logs'
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
  }
}

const updateLog = async (id, prompt, answer) => {
  const action = '@Api.js: patching log'
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
  }
}

const deleteLog = async (id) => {
  const action = '@Api.js: deleting log'
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
  }
}

const deleteAllLogs = async () => {
  const action = '@Api.js: deleting all logs from database'
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