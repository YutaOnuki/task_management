import { mount } from '@vue/test-utils'
import MgtLoginForm from '@/components/molecules/MgtLoginForm'

describe('MgtLoginForm', () => {
  describe('プロパティ', () => {
    describe('validation', () => {
      let loginForm
      beforeEach(done => {
        loginForm = mount(MgtLoginForm, {
          propsData: { onlogin: () => {} }
        })
        loginForm.vm.$nextTick(done)
      })

      describe('email', () => {
        describe('required', () => {
          describe('何も入力されていない', () => {
            it('validation.email.requiredがinvalidであること', () => {
              loginForm.setData({ email: '' })
              expect(loginForm.vm.validation.email.required).toEqual(false)
            })
          })
          describe('入力あり', () => {
            it('validation.email.requiredがvalidであること', () => {
              loginForm.setData({ email: 'foo@domain.com' })
              expect(loginForm.vm.validation.email.required).toEqual(true)
            })
          })
        })
        describe('format', () => {
          describe('メールアドレス形式ではないフォーマット', () => {
            it('validation.email.formatがinvalidであること', () => {
              loginForm.setData({ email: 'foobar' })
              expect(loginForm.vm.validation.email.format).toEqual(false)
            })
          })
          describe('メールアドレス形式のフォーマット', () => {
            it('validation.email.formatがvalidであること', () => {
              loginForm.setData({ email: 'foo@domain.com' })
              expect(loginForm.vm.validation.email.format).toEqual(true)
            })
          })
        })
      })
      describe('password', () => {
        describe('required', () => {
          describe('何も入力されていない', () => {
            it('validation.password.requiredがinvalidであること', () => {
              loginForm.setData({ password: '' })
              expect(loginForm.vm.validation.password.required).toEqual(false)
            })
          })
          describe('入力あり', () => {
            it('validation.password.requiredがvalidであること', () => {
              loginForm.setData({ password: 'xxxx' })
              expect(loginForm.vm.validation.password.required).toEqual(true)
            })
          })
        })
      })
    })
    describe('valid', () => {
      let loginForm
      beforeEach(done => {
        loginForm = mount(MgtLoginForm, {
          propsData: { onlogin: () => {} }
        })
        loginForm.vm.$nextTick(done)
      })
      describe('バリデーション 項目全てOK', () => {
        it('validになること', () => {
          loginForm.setData({
            email: 'foo@domain.com',
            password: '12345678'
          })
          expect(loginForm.vm.valid).toEqual(true)
        })
      })
      describe('バリデーション NG項目あり', () => {
        it('invalidになること', () => {
          loginForm.setData({
            email: 'foo@domain.com',
            password: ''
          })
          expect(loginForm.vm.valid).toEqual(false)
        })
      })
    })
    describe('desableLoginAction', () => {
      let loginForm
      beforeEach(done => {
        loginForm = mount(MgtLoginForm, {
          propsData: { onlogin: () => {} }
        })
        loginForm.vm.$nextTick(done)
      })
      describe('バリデーションNG項目あり', () => {
        it('ログイン処理は無効', () => {
          loginForm.setData({
            email: 'foo@domain.com',
            password: ''
          })
          expect(loginForm.vm.disableLoginAction).toEqual(true)
        })
      })
      describe('バリデーション項目全てOKかつログイン処理中ではない', () => {
        it('ログイン処理は有効', () => {
          loginForm.setData({
            email: 'foo@domain.com',
            password: '12345678'
          })
          expect(loginForm.vm.disableLoginAction).toEqual(false)
        })
      })
      describe('バリデーション項目全てOKかつログイン処理中', () => {
        it('ログイン処理は無効', () => {
          loginForm.setData({
            email: 'foo@domain.com',
            password: '12345678',
            progress: true
          })
          expect(loginForm.vm.disableLoginAction).toEqual(true)
        })
      })
    })
    describe('onlogin', () => {
      let loginForm
      let onloginStub
      beforeEach(done => {
        onloginStub = sinon.stub()
        loginForm = mount(MgtLoginForm, {
          propsData: { onlogin: onloginStub }
        })
        loginForm.setData({
          email: 'foo@domain.com',
          password: '12345678'
        })
        loginForm.vm.$nextTick(done)
      })
      describe('resolve', () => {
        it('resolveされること', done => {
          onloginStub.resolves()
          loginForm.find('button').trigger('click')
          expect(onloginStub.called).toEqual(false)
          expect(loginForm.vm.error).toEqual('')
          expect(loginForm.vm.disableLoginAction).toEqual(true)
          loginForm.vm.$nextTick(() => {
            expect(onloginStub.called).toEqual(true)
            const authInfo = onloginStub.args[0][0]
            expect(authInfo.email).toEqual(loginForm.vm.password)
            loginForm.vm.$nextTick(() => {
              expect(loginForm.vm.error).toEqual('')
              expect(loginForm.vm.disableLoginAction).toEqual(false)
              done()
            })
          })
        })
      })
      describe('reject', () => {
        it('rejectされること', done => {
          onloginStub.rejects(new Error('login error!'))
          loginForm.find('button').trigger('click')
          expect(onloginStub.called).toEqual(false)
          expect(loginForm.vm.error).toEqual('')
          expect(loginForm.vm.disableLoginAction).toEqual(true)
          loginForm.vm.$nextTick(() => {
            expect(onloginStub.called).toEqual(true)
            const authInfo = onloginStub.args[0][0]
            expect(authInfo.email).toEqual(loginForm.vm.email)
            expect(authInfo.password).toEqual(loginForm.vm.password)
            loginForm.vm.$nextTick(() => {
              expect(loginForm.vm.error).toEqual('login error!')
              expect(loginForm.vm.disableLoginAction).toEqual(false)
              done()
            })
          })
        })
      })
    })
  })
})
