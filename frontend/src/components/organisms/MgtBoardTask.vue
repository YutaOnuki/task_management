<template>
  <div>
    <MgtBoardNavigation />
    <MgtTaskListHeader />
    <MgtTaskCard />
    <MgtTaskForm />
  </div>
</template>

<script>
import MgtBoardNavigation from '@/components/molecules/MgtBoardNavigation.vue'
import MgtTaskListHeader from '@/components/molecules/MgtTaskListHeader'
import MgtTaskCard from '@/components/molecules/MgtTaskCard'
import MgtTaskForm from '@/components/molecules/MgtTaskForm'

export default {
  name: 'MgtBordTask',
  components: {
    MgtBoardNavigation,
    MgtTaskListHeader,
    MgtTaskCard,
    MgtTaskForm
  }
}
</script>
