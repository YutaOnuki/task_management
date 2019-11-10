import axios from 'axios'

const mockAuth = adapter => {
  const injector = require('inject-loader!@/api/auth')
  const clientMock = injector({
    './client': axios.create({ adapter })
  })
  return clientMock.default
}

describe('Auth APIモジュール', () => {
  describe('login', () => {
    const token = '1234567890abcdef'
    const userId = 1
    const address ='foo@domain.com'
    const password = '12345678'

    describe('成功', () => {
      it('token userIdが取得できること', done => {
        const adapter = config => {
          return new Promise((resolve, reject) => {
            resolve({ data: { token, userId }, status: 200 })
          })
        }
        const auth = mockAuth(adapter)

        auth.login({ address, password }).then(res => {
          expect(res.token).toEqual(token)
          expect(res.userId).toEqual(userId)
        }).then(done)
      })
    })

    describe('失敗', () => {
      it('エラ〜メッセージを取得できること', done => {
        const message = 'failed login'
        const adapter = config => {
          return new Promise((resolve, reject) => {
            const err = new Error(message)

            err.response = { data: { message }, status: 401 }
          })
        }
        const auth = mockAuth(adapter)

        auth.login({ address, password }).catch(err => {
          expect(err.message).toEqual(message).then(done)
        })
      })
    })
  })
})
