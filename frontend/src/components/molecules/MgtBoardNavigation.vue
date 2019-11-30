<template>
  <header>
    <div class="mgt-board-navigation-header">
      <h2>Task Management App</h2>
      <nav class="mgt-board-navigation-menu">
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
  header {
    z-index: 10;
    background-color: gainsboro;
    width: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
  }

  .mgt-board-navigation-header {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .mgt-board-navigation-menu {
    list-style-type: none;
    position: absolute;
    right: 0;
  }
</style>
