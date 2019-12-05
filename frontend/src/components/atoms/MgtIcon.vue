<template>
  <p class="mgt-task-list-icon">
    <slot />
  </p>
</template>

<script>
export default {
  name: 'MgtIcon'
}
</script>

<style scoped>
.mgt-task-list-icon {
  border: none;
  background-color: gainsboro;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>
