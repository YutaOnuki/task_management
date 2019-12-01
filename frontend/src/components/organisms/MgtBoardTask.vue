<template>
  <div>
    <MgtBoardNavigation />
    <MgtTaskListHerder />
    <MgtTaskForm />
  </div>
</template>

<script>
import MgtBoardNavigation from '@/components/molecules/MgtBoardNavigation.vue'
import MgtTaskListHeader from '@/components/molecules/MgtTaskListHeader'
import MgtTaskForm from '@/components/molecules/MgtTaskForm'

export default {
  name: 'MgtBordTask',
  components: {
    MgtBoardNavigation,
    MgtTaskListHeader,
    MgtTaskForm
  }
}
</script>
