<template>
  <div style="text-align: center;">
    <el-row>
      <el-col :span="1"><font size="5" color="red">HOT</font></el-col>
      <el-col :span="1" :offset="20">
        <span @mouseover="a(1)" @mouseleave="b(1)"><el-link>衣服</el-link></span>
      </el-col>
      <el-col :span="1">
        <span @mouseover="a(2)" @mouseleave="b(2)"><el-link>裤子</el-link></span>
      </el-col>
      <el-col :span="1">
        <span @mouseover="a(3)" @mouseleave="b(3)"><el-link>鞋子</el-link></span>
      </el-col>
    </el-row>
    <br />
    <div style="width: 100%;height: 400px;">
      <el-row v-if="one">
        <el-col :span="4"><el-image src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2356877884,3015963847&fm=15&gp=0.jpg" class="h" fit="cover"></el-image></el-col>
        <el-col :span="4" :offset="1">
          <el-image src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2356877884,3015963847&fm=15&gp=0.jpg" class="h" fit="cover"></el-image>
        </el-col>
        <el-col :span="4" :offset="1">
          <el-image src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2553049679,1870697137&fm=26&gp=0.jpg" class="h" fit="cover"></el-image>
        </el-col>
        <el-col :span="4" :offset="1">
          <el-image src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2818840703,32251530&fm=26&gp=0.jpg" class="h" fit="cover"></el-image>
        </el-col>
        <el-col :span="4" :offset="1">
          <el-image src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2754328248,2679901375&fm=26&gp=0.jpg" class="h" fit="cover"></el-image>
        </el-col>
      </el-row>
      <el-row v-if="two">
        <el-col :span="4"><el-image src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2754328248,2679901375&fm=26&gp=0.jpg" class="h" fit="cover"></el-image></el-col>
        <el-col :span="4" :offset="1">
          <el-image src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2754328248,2679901375&fm=26&gp=0.jpg" class="h" fit="cover"></el-image>
        </el-col>
        <el-col :span="4" :offset="1">
          <el-image src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2818840703,32251530&fm=26&gp=0.jpg" class="h" fit="cover"></el-image>
        </el-col>
        <el-col :span="4" :offset="1">
          <el-image src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2553049679,1870697137&fm=26&gp=0.jpg" class="h" fit="cover"></el-image>
        </el-col>
        <el-col :span="4" :offset="1">
          <el-image src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2553049679,1870697137&fm=26&gp=0.jpg" class="h" fit="cover"></el-image>
        </el-col>
      </el-row>
      <el-row v-if="tre">
        <el-col :span="4"><el-image src="http://n.sinaimg.cn/sinacn10120/5/w586h1019/20200209/ef0d-ipfprtp0659749.jpg" class="h" fit="cover"></el-image></el-col>
        <el-col :span="4" :offset="1"><el-image src="http://n.sinaimg.cn/sinacn10120/12/w586h1026/20200209/05bc-ipfprtp0659888.jpg" class="h" fit="cover"></el-image></el-col>
        <el-col :span="4" :offset="1"><el-image src="http://n.sinaimg.cn/sinacn10120/49/w600h1049/20200209/7fab-ipfprtp0660011.jpg" class="h" fit="cover"></el-image></el-col>
        <el-col :span="4" :offset="1"><el-image src="http://n.sinaimg.cn/sinacn10120/9/w586h1023/20200209/b703-ipfprtp0660159.jpg" class="h" fit="cover"></el-image></el-col>
        <el-col :span="4" :offset="1"><el-image src="http://n.sinaimg.cn/sinacn10120/799/w586h1013/20200209/c271-ipfprtp0660282.jpg" class="h" fit="cover"></el-image></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      one: true,
      two: false,
      tre: false
    }
  },
  methods: {
    a (num) {
      if (num == 1) {
        this.one = true
        this.two = false
        this.tre = false
      } else if (num == 2) {
        this.two = true
        this.one = false
        this.tre = false
      } else {
        this.tre = true
        this.one = false
        this.two = false
      }
    },
    b (num) {
      if (num == 1) {
        this.one = true
        this.tre = false
        this.two = false
      } else if (num == 2) {
        this.two = true
        this.tre = false
        this.one = false
      } else {
        this.tre = true
        this.two = false
        this.one = false
      }
    }
  }
}
</script>

<style>
.h:hover {
  box-shadow: 0px 0px 10px #000;
}
</style>
