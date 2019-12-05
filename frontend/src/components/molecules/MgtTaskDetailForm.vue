<template>
  <div class="mgt-task-detail-contents">
    <h4 class="mgt-task-detail-title">タスク詳細フォーム</h4>
    <p class="mgt-task-detail-name">タスク名1</p>
    <input class="mgt-task-detail-name-form">
    <p class="mgt-task-detail-description">説明</p>
    <input class="mgt-task-detail-description-form">
    <MgtButton>更新</MgtButton>
  </div>
</template>

<script>
import MgtButton from '@/components/atoms/MgtButton'

export default {
  name: 'MgtTaskDetailForm',
  components: {
    MgtButton
  }
}
</script>
