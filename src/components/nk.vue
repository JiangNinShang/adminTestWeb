<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="/">
      <template slot="title">
        首页
      </template>
    </el-menu-item>
    <el-menu-item index="2" style="margin-left: 250px;">
      <template slot="title">
        我是一个占位的
      </template>
    </el-menu-item>
    <el-menu-item index="3" disabled style="margin-left: 50px;">
      <template slot="title">
        <el-input :placeholder="sb" v-model="input" clearable style="width: 400px;">
          <template slot="append">
            <el-button slot="append" icon="el-icon-search" @click="a"></el-button>
          </template>
        </el-input>
      </template>
    </el-menu-item>
    <el-submenu index="4" style="margin-left: 300px">
      <template slot="title">
        <el-avatar shape="square" :size="50" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"></el-avatar>
      </template>
      <el-menu-item index="4-1">个人信息</el-menu-item>
      <el-menu-item index="4-2">消费记录</el-menu-item>
      <el-menu-item index="4-3">退出登录</el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: '1',
      input: '',
      sb: '',
      item: ['请输入内容', 'gagaga', 'wuwhuwhuwhuw'],
      i: -1,
      s: ''
    };
  },
  methods: {
    a() {
      alert(this.input);
    },
    time() {
      clearInterval(this.s);
      this.s = setInterval(() => {
        this.i++;
        if (this.i < this.item.length) {
          this.sb = this.item[this.i];
        } else {
          this.i = 0;
          this.sb = this.item[this.i];
        }
      }, 3000);
    }
  },
  created() {
    this.time();
  }
};
</script>
<style>
.el-input__inner::placeholder {
  color: red;
  text-align: center;
}
/* 谷歌 */
.el-input__inner::-webkit-input-placeholder {
  color: red;
  text-align: center;
}
/* 火狐 */
.el-input__inner:-moz-placeholder {
  color: red;
  text-align: center;
}
/*ie*/
.el-input__inner:-ms-input-placeholder {
  color: red;
  text-align: center;
}
</style>
