<template>
  <el-container>
    <el-backtop></el-backtop>
    <Player></Player>
    <el-header><Head></Head></el-header>
    <el-main style="margin-top: 50px;"><router-view /></el-main>
    <el-footer style="margin-top: 10%;"><Footer></Footer></el-footer>
  </el-container>
</template>

<script>
import Head from '@/components/head.vue'
import Footer from '@/components/footer.vue'
import Player from 'zw-player'
export default {
  name: 'App',
  components: {
    Head,
    Footer,
    Player
  },
  created () {
    this.$nextTick(() => {
      // 禁用右键
      document.oncontextmenu = new Function('event.returnValue=false')
      // 禁用选择
      document.onselectstart = new Function('event.returnValue=false')
    })
  }
}
</script>

<style></style>
