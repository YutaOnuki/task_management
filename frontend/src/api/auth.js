// import client from './client'
import client from 'axios'

export default {
  login: authInfo => {
    return new Promise((resolve, reject) => {
      client.create()
      client.post('/auth/login', authInfo).then(res => resolve({
        token: res.data.token, userId: res.data.userId
      })).catch(err => {
        reject(new Error(err.response.data.message || err.message))
      })
    })
  }
}
