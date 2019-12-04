<template>
  <header class="mgt-task-list-header">
    <h4 class="mgt-task-list-header-title">TODO</h4>
    <MgtIcon>＋</MgtIcon>
  </header>
</template>

<script>
import MgtIcon from '@/components/atoms/MgtIcon'
export default {
  name: 'MgtTaskListHeader',
  components: {
    MgtIcon
  }
}
</script>

<style scoped>
.mgt-task-list-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: ridge 2px black;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-color: gainsboro;
}

.mgt-task-list-header-title {
  flex-basis: 90%;
  text-align: left;
  margin: 0 0 0 5px;
}

.mgt-task-list-icon {
  flex-basis: 10%;
}
</style>
