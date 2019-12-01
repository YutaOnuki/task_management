<template>
  <MgtBoardNavigation />
</template>

<script>
import MgtBoardNavigation from '@/components/molecules/MgtBoardNavigation.vue'
import MgtTaskListHeader from '@/components/molecules/MgtTaskListHeader'

export default {
  name: 'MgtBordTask',
  components: {
    MgtBoardNavigation,
    MgtTaskListHeader
  }
}
</script>
