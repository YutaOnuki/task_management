<template>
  <header class="mgt-board-navi-header">
    <div class="mgt-board-navi-header-contents">
      <h2>Task Management App</h2>
      <nav class="mgt-board-navi-menu">
        <p>ログオフ</p>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MgtBordNavigation'
}
</script>

<style scoped>
  .mgt-board-navi-header {
    z-index: 10;
    background-color: gainsboro;
    width: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
  }

  .mgt-board-navi-header-contents {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .mgt-board-navi-menu {
    list-style-type: none;
    position: absolute;
    right: 0;
  }
</style>
