<template>
  <!-- $route.path -->
  <el-menu class="el-menu-demo" mode="horizontal" overflow-y: scroll active-text-color="red">
    <el-menu-item index="/" style="width: 30%;align:left;"><i class="el-icon-s-home">首页</i></el-menu-item>
    <el-menu-item style="width: 40%;" index="search">
      <template slot="title">
        <el-input placeholder="请输入内容" v-model="input" clearable>
          <template slot="append">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </template>
        </el-input>
        <!-- 搜索框 -->
      </template>
    </el-menu-item>
    <el-submenu index="giao" style="margin-left: 20%;">
      <template slot="title">
        <el-avatar :size="50" src="https://empty" @error="errorHandler"><img src="../../static/img/皱眉.jpg" /></el-avatar>
      </template>
      <el-menu-item index="giao/info" align="center"><i class="el-lion-view el-icon-user">&nbsp;&nbsp;个人信息</i></el-menu-item>
      <el-menu-item index="giao/love" align="center"><i class="el-lion-view el-icon-star-off">&nbsp;&nbsp;我的喜欢</i></el-menu-item>
      <el-menu-item index="giao/jl" align="center"><i class="el-lion-view el-icon-s-order">&nbsp;&nbsp;订单记录</i></el-menu-item>
      <el-menu-item index="giao/hwc" align="center"><i class="el-lion-view el-icon-shopping-cart-full">&nbsp;&nbsp;我的购物车</i></el-menu-item>
      <el-menu-item index="giao/loginout" align="center" class="cao"><i class="el-lion-view el-icon-switch-button">&nbsp;&nbsp;退出登录</i></el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    };
  },
  methods: {
    errorHandler() {
      return true;
    }
  }
};
</script>

<style></style>
