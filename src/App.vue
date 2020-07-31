<template>
  <el-container>
    <el-header><Head></Head></el-header>
    <el-main>
      <div id="app"><router-view /></div>
    </el-main>
  </el-container>
</template>

<script>
import Head from '@/components/head.vue';
export default {
  name: 'App',
  components: {
    Head
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
