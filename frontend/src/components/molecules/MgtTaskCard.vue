<template>
  <div class="mgt-task-card-contents">
    <p class="mgt-task-card">タスク1<!-- {{ タスク名が入る予定、レイアウト確認で文字を仮表示させている }}  --></p>
    <!-- TODO font-awesomeを使うかもしれない レイアウト確認で×印を仮表示させている-->
    <MgtIcon><i class="fas fa-times" /></MgtIcon>
  </div>
</template>

<script>
import MgtIcon from '@/components/atoms/MgtIcon'

export default {
  name: 'MgtTaskCard',
  components: {
    MgtIcon
  }
}
</script>

<style scoped>
.mgt-task-card-contents {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px;
  border-radius: 10px;
  border: solid 1px black;
  background-color: gainsboro;
}

.mgt-task-card {
  flex-basis: 90%;
  text-align: left;
  margin: 5px 0 5px 5px;
  font-size: 3px;
}

/* TODO アイコンはfont-awesomeを使うかもしれないので、font-sizeは変更するかも */
.mgt-task-list-icon {
  flex-basis: 10%;
  font-size: 15px;
}
</style>
