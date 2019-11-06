import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import MgtLoginView from '@/components/templates/MgtLoginView'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('MgtLoginView', () => {
  let actions
  let $router
  let LoginFormComponentStub
  const triggerLogin = (loginView, target) => {
    const loginForm = loginView.find(target)
    loginForm.vm.onlogin('foo@domain.com', '12345678')
  }
  beforeEach(() => {
    LoginFormComponentStub = {
      name: 'MgtLoginForm',
      props: ['onlogin'],
      render: h => h('p', ['login form'])
    }
    $router = {
      push: sinon.spy()
    }
    actions = {
      login: sinon.stub()
    }
    store = new Vuex.Store({
      state: {},
      actions
    })
  })
  describe('ログイン', () => {
    let loginView
    describe('成功', () => {
      beforeEach(() => {
        loginView = mount(MgtLoginView, {
          mocks: { $router },
          stubs: {
            'mgt-login-form': LoginFormComponentStub
          },
          store,
          localVue
        })
      })
      it('ボードページのルートにリダイレクトすること', done => {
        actions.login.resolves()
        triggerLogin(loginView, LoginFormComponentStub)
        loginView.vm.$nextTick(() => {
          expect($router.push.args[0][0].path).toEqual('/')
          done()
        })
      })
    })
    describe('失敗', () => {
      beforeEach(() => {
        loginView = mount(MgtLoginView, {
          stubs: {
            'mgt-login-form': LoginFormComponentStub
          },
          store,
          localVue
        })
        sinon.spy(loginView.vm, 'throwReject')
      })
      afterEach(() => {
        loginView.vm.throwReject.restore()
      })
      it('エラー処理が呼び出されること', done => {
        const message = 'login failed'
        actions.login.rejects(new Error(message))
        triggerLogin(loginView, LoginFormComponentStub)
        loginView.vm.$nextTick(() => {
          const callInfo = loginView.vm.throwReject
          expect(callInfo.called).toEqual(true)
          expect(callInfo.args[0][0].message).toEqual(message)
          done()
        })
      })
    })
  })
})
