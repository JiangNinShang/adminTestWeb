<template>
  <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" overflow-y: scroll>
    <el-menu-item index="1" style="width: 30%;align:left;"><i class="el-icon-s-home">首页</i></el-menu-item>
    <el-menu-item style="width: 40%;">
      <template slot="title">
        <el-input placeholder="请输入内容" v-model="input" clearable>
          <template slot="append">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </template>
        </el-input>
        <!-- 搜索框 -->
      </template>
    </el-menu-item>
    <el-submenu index="2" style="width: 10%;margin-left: 20%;">
      <template slot="title">
        <el-avatar :size="50" src="https://empty" @error="errorHandler"><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=476262993,2239475519&fm=11&gp=0.jpg" /></el-avatar>
      </template>
      <el-menu-item index="2-1">
        <i class="el-lion-view el-icon-user">&nbsp;&nbsp;</i>
        个人信息
      </el-menu-item>
      <el-menu-item index="2-2"><i class="el-lion-view el-icon-star-off">&nbsp;&nbsp;我的喜欢</i></el-menu-item>
      <el-menu-item index="2-3"><i class="el-lion-view el-icon-s-order">&nbsp;&nbsp;订单记录</i></el-menu-item>
      <el-menu-item index="2-4"><i class="el-lion-view el-icon-shopping-cart-full">&nbsp;&nbsp;我的购物车</i></el-menu-item>
      <el-menu-item index="2-5"><i class="el-lion-view el-icon-switch-button">&nbsp;&nbsp;退出登录</i></el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data () {
    return {
      input: ''
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    errorHandler () {
      return true
    }
  }
}
</script>

<style></style>
