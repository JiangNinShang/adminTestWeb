<template>
  <div>
    <div v-for="(i, index) in item" :key="index">
      <br />
      <br />
      <br />
      <el-popover placement="right" width="50%" trigger="hover">
        <el-row>
          <el-col :span="4" :offset="2" v-for="(bg, num) in i.giao" :key="num" style="margin-top: 10px;margin-bottom: 10px;">
            <el-link type="primary" href="#">{{ bg.value }}</el-link>
          </el-col>
        </el-row>
        <el-button slot="reference" type="text">{{ i.value }}</el-button>
      </el-popover>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data () {
    return {
    }
  }
}
</script>

<style></style>
