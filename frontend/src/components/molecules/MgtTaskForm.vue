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
  background-color: gainsboro;
  margin: 5px;
  border-radius: 10px;
  border: solid 1px black;
}

.mgt-task-text {
  flex-basis: 80%;
  margin: 5px;
  border: solid 1px black;
}

.mgt-button {
  flex-basis: 40%;
  margin: 5px;
  font-size: 5px;
  border-radius: 10px;
}
</style>
