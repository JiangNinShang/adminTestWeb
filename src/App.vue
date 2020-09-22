<template>
  <el-container>
    <el-backtop>
    </el-backtop>
    <el-header><Head></Head></el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-footer><Footer></Footer></el-footer>
  </el-container>
</template>

<script>
import Head from '@/components/head.vue'
import Footer from '@/components/footer.vue'
export default {
  name: 'App',
  components: {
    Head,
    Footer
  }
}
</script>

<style></style>
