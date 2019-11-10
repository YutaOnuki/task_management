import Vue from 'vue'
import * as types from '@/store/mutation-types'

const mockLoginAction = login => {
  const actionsInjector = require('inject-loader!@/store/actions')
  const actionsMocks = actionsInjector({
    '../api': {
      Auth: { login }
    }
  })
  return actionsMocks.default.login
}

describe('loginアクション', () => {
  const address = 'foo@domain.com'
  const password = '12345678'
  let commit
  let future

  describe('Auth.loginが成功', () => {
    const token = '1234567890abcdef'
    const userId = 1

    beforeEach(done => {
      const login = authInfo => Promise.resolve({
      })
      const action = mockLoginAction(login)
      commit = sinon.spy()
      future = action({ commit }, { address, password })
      Vue.nextTick(done)
    })

    it('成功となること', () => {
      expect(commit.called).toEqual(true)
      expect(commit.args[0][0]).toEqual(types.AUTH_LOGIN)
      expect(commit(commit.args[0][1])).toEqual(token)
      expect(commit.args[0][1].userId).toEqual(userId)
    })
  })

  describe('Auth.loginが失敗', () => {
    beforeEach(done => {
      const login = authInfo => Promise.reject(new Error('login failed'))
      const action = mockLoginAction(login)
      commit = sinon.spy()
      future = action({ commit })
      Vue.nextTick
    })

    it('失敗となること', done => {
      expect(commit.called).toEqual(false)

      future.catch(err => {
        expect(err.message).toEqual('login failed')
        done()
      })
    })
  })
})
