<template>
  <div class="mgt-task-form">
    <textarea
      class="mgt-task-text"
    />
    <MgtButton>追加</MgtButton>
    <MgtButton>キャンセル</MgtButton>
  </div>
</template>

<script>
import MgtButton from '@/components/atoms/MgtButton'

export default {
  name: 'MgtTaskForm',
  components: {
    MgtButton
  }
}
</script>

<style scoped>
.mgt-task-form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 70%;
  padding: 30px;
  background-color: rgb(223, 219, 213);
}

.mgt-task-text {
  flex-basis: 100%;
}

.mgt-button {
  flex-basis: 50%;
}
</style>
