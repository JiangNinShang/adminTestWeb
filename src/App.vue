<template>
  <div id="app"><router-view /></div>
  <!-- <Player></Player> -->
</template>

<script>
import Player from 'zw-player';
export default {
  name: 'App',
  components: {
    Player
  },
  created() {
    this.$nextTick(() => {
      // 禁用右键
      document.oncontextmenu = new Function('event.returnValue=false');
      // 禁用选择
      document.onselectstart = new Function('event.returnValue=false');
    });
  }
};
</script>

<style></style>
