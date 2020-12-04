<template>
  <div id="app"><router-view /></div>
  <!-- <el-container> -->
  <!-- <Player></Player> -->
  <!-- <el-backtop></el-backtop> -->
  <!-- <el-header><Head></Head></el-header> -->
  <!-- <el-main style="margin-top: 50px;"><router-view /></el-main> -->
  <!-- <el-footer style="margin-top: 50px;margin-bottom: 80px;height: 200px;"><Footer></Footer></el-footer> -->
  <!-- </el-container> -->
</template>

<script>
import Player from 'zw-player';
export default {
  name: 'App',
  components: {
    Player
  }
  // created () {
  //   this.$nextTick(() => {
  //     // 禁用右键
  //     document.oncontextmenu = new Function('event.returnValue=false')
  //     // 禁用选择
  //     document.onselectstart = new Function('event.returnValue=false')
  //   })
  // }
};
</script>

<style></style>
