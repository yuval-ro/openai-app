import axios from 'axios'

const onSuccess = (action) => {
  console.log(`${action} succeeded`)
}

const onFail = (action, err) => {
  console.log(`${action} failed`)
  console.error(err)
}

const sendMessage = async (message) => {
  const action = '@Api.js: sending message to davinci'
  try {
    const res = await axios({
      method: 'post',
      url: 'http://localhost:3001/api/davinci',
      data: { message }
    })
    onSuccess(action)
    return res?.data?.message
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
  const action = '@Api.js: creating log'
  try {
    await axios({
      method: 'post',
      url: 'http://localhost:3001/api/create',
      data: {
        prompt: prompt,
        answer: answer
      }
    })
    onSuccess(action)
  }
  catch (err) {
    onFail(action, err)
  }
}

const readAll = async () => {
  const action = '@Api.js: fetching all logs'
  try {
    const res = await axios({
      method: 'post',
      url: 'http://localhost:3001/api/read'
    })
    onSuccess(action)
    console.log(res?.data?.docs)
    return res?.data?.docs
  }
  catch (err) {
    onFail(action, err)
  }
}

const updateLog = async (id, prompt, answer) => {
  const action = '@Api.js: patching log'
  try {
    await axios({
      method: 'patch',
      url: 'http://localhost:3001/api/update',
      data: {
        id: id,
        prompt: prompt,
        answer: answer
      }
    })
    onSuccess(action)
  }
  catch (err) {
    onFail(action, err)
  }
}

const deleteLog = async (id) => {
  const action = '@Api.js: deleting log'
  try {
    await axios({
      method: 'delete',
      url: 'http://localhost:3001/api/delete',
      data: { id }
    })
    onSuccess(action)
  }
  catch (err) {
    onFail(action, err)
  }
}

export {
  sendMessage,
  authLogin,
  createLog,
  readAll,
  updateLog,
  deleteLog
}