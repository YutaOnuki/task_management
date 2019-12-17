<template>
  <div class="mgt-board-view">
    <div class="mgt-board-nav-container">
      <MgtBoardNavigation />
    </div>
    <div class="mgt-board-task-container">
      <MgtBoardTask />
    </div>
  </div>
</template>

<script>
import MgtBoardTask from '../organisms/MgtBoardTask'
import MgtBoardNavigation from '@/components/molecules/MgtBoardNavigation'

export default {
  name: 'MgtBordView',
  components: {
    MgtBoardTask,
    MgtBoardNavigation
  },
  created () {
    this.$store.dispatch('fetchLists')
  }
}
</script>

<style scoped>
.mgt-board-view {
  margin-top: 80px;
}

.mgt-board-task-container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
}
</style>
