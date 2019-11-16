<template>
  <form novalidate>
    <div class="form-item">
      <label for="email">メールアドレス</label>
      <input
        id="email"
        v-model="email"
        type="text"
        autocomplete="off"
        placeholder="例: Mgt@domain.com"
        @focus="resetError">
      <ul class="validation-errors">
        <li v-if="!validation.email.format">
          メールアドレスの形式が不正です
        </li>
        <li v-if="!validation.email.required">
          メールアドレスが入力されていません
        </li>
      </ul>
    </div>
    <div class="form-item">
      <label for="password">パスワード</label>
      <input
        id="password"
        v-model="password"
        type="password"
        autocomplete="off"
        placeholder="例:xxxxxx"
        @focus="resetError">
      <ul class="validation-errors">
        <li v-if="!validation.password.required">
          パスワードが入力されていません
        </li>
      </ul>
    </div>
    <div class="form-actions">
      <MgtButton
        :disabled="disableLoginAction"
        @click="handleClick">ログイン</MgtButton>
      <p
        v-if="progress"
        class="login-progress">ログイン中</p>
      <p
        v-if="error"
        class="login-error">{{ error }}</p>
    </div>
  </form>
</template>

<script>
import MgtButton from '@/components/atoms/MgtButton'

const REGEX_EMAIL = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/
const required = val => !!val.trim()

export default {
  name: 'MgtLoginForm',
  components: {
    MgtButton
  },
  props: {
    onlogin: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      email: '',
      password: '',
      progress: false,
      error: ''
    }
  },
  computed: {
    validation () {
      return {
        email: {
          required: required(this.email),
          format: REGEX_EMAIL.test(this.email)
        },
        password: {
          required: required(this.password)
        }
      }
    },
    valid () {
      const validation = this.validation
      const fields = Object.keys(validation)
      let valid = true

      for (let i = 0; i < fields.length; i++) {
        const field = fields[i]
        valid = Object.keys(validation[field]).every(key => validation[field][key])
        if (!valid) { break }
      }
      return valid
    },
    disableLoginAction () {
      return !this.valid || this.progress
    }
  },
  methods: {
    resetError () {
      this.error = ''
    },
    handleClick (ev) {
      if (this.disableLoginAction) { return }
      this.progress = true
      this.error = ''
      this.$nextTick(() => {
        this.onlogin({ email: this.email, password: this.password }).catch(err => {
          this.error = err.message
        }).then(() => {
          this.progress = false
        })
      })
    }
  }
}
</script>

<style scoped>
form {
  display: block;
  margin: 0 auto;
  text-align: left;
}
label {
  display: block;
}
input {
  width: 100%;
  padding: .5em;
  font: inherit;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0.25em 0;
}
ul li {
  font-size: 0.5em;
}
.validation-errors {
  height: 32px;
}
.font-actions p {
  font-size: 0.5em;
}
</style>
