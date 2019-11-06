<template>
  <div class="login-view">
    <h1>Task Management App</h1>
    <MgtLoginForm :onlogin="handleLogin" />
  </div>
</template>

<script>
import MgtLoginForm from '@/components/molecules/MgtLoginForm.vue'

export default {
  name: 'MgtLoginView',
  components: {
    MgtLoginForm
  },
  methods: {
    handleLogin (authInfo) {
      return this.$store.dispatch('login', authInfo).then(() => {
        this.$router.push({ path: '/' })
      }).catch(err => this.throwReject(err))
    },
    throwReject (err) {
      return Promise.reject(err)
    }
  }
}
</script>

<style scoped>
  .login-view {
    width: 320px;
    margin: auto;
  }
</style>
