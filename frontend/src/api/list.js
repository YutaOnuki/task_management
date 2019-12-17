import client from './client'

export default {
  fetchLists: () => {
    return new Promise((resolve, reject) => {
      client.create()
      client.post('/list/fetchLists').then(res => resolve({
        taskLists: res.data.taskLists
      }))
    })
  }
}
