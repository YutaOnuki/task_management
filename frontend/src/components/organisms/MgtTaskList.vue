<template>
  <div class="mgt-task-list-container">
    <div class="mgt-task-list">
      <div class="mgt-task-list-header-container">
        <MgtTaskListHeader />
      </div>
      <div class="mgt-task-card-container">
        <MgtTaskCard />
      </div>
      <div class="mgt-task-form-container">
        <MgtTaskForm />
      </div>
    </div>
  </div>
</template>

<script>
import MgtTaskListHeader from '@/components/molecules/MgtTaskListHeader'
import MgtTaskCard from '@/components/molecules/MgtTaskCard'
import MgtTaskForm from '@/components/molecules/MgtTaskForm'

export default {
  name: 'MgtTaskList',
  components: {
    MgtTaskListHeader,
    MgtTaskCard,
    MgtTaskForm
  }
}
</script>

<style scoped>
.mgt-task-list-container {
  flex-basis: 30%;
}

.mgt-task-list {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 5px;
  border: solid 1px black;
  border-radius: 10px;
}
</style>
