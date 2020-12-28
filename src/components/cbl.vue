<template>
  <div
    style="position: fixed;
 right: 20px;
 bottom: 20px;
 z-index: 99;
 font-size: 12px;"
  >
    <el-card style="width: 90px;height: 90px;text-align: center;" v-for="(i, index) in cb" :key="index" class="tmd">
      <el-badge :value="i.num" v-if="i.type == 'badge'">
        <el-link :underline="false" @click="tz(i.src)">
          <i :class="i.class" style="font-size:30px"></i>
          <p style="font-size: 1px;margin-top: 10px;">{{ i.font }}</p>
        </el-link>
      </el-badge>
      <el-link :underline="false" @click="tz(i.src)" v-else>
        <i :class="i.class" style="font-size:30px"></i>
        <p style="font-size: 1px;margin-top: 10px;">{{ i.font }}</p>
      </el-link>
    </el-card>
    <el-link :underline="false" @click="top">
      <el-card style="width: 90px;height: 90px;text-align: center; margin-top: 30px;" class="tmd">
        <i class="el-icon-top" style="font-size:30px"></i>
        <p style="font-size: 1px;margin-top: 10px;">回到顶部</p>
      </el-card>
    </el-link>
  </div>
</template>

<script>
export default {
  props: ['cb'],
  methods: {
    tz (src) {
      this.$router.push({ path: src })
    },
    top () {
      app.scrollIntoView()
    }
  }
}
</script>

<style>
.tmd:hover {
  color: orangered;
}
</style>
