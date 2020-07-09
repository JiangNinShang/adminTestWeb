<template>
  <el-container width="100%" height="100%">
    <el-header style="text-align: center;" width="330px">
      <iframe scrolling="no" :src="$store.getters.getSrc" frameborder="0" width="320px" height="200px" allowtransparency="true"></iframe>
    </el-header>
    <el-container style="margin-top: auto;">
      <el-aside>
        <el-switch v-model="isCollapse" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        <!-- default-active指菜单展开是默认选择 -->
        <el-menu default-active="1-1" class="el-menu-vertical-demo" :collapse="!isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2"><el-menu-item index="1-3">选项3</el-menu-item></el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <el-table style="text-align: center;width: 70%" max-height="250" :data="$store.getters.getUsers"  v-loading="loading">
          <el-table-column type="selection" width="55" label="全选"></el-table-column>
          <el-table-column property="eid" label="编号" width="120"></el-table-column>
          <el-table-column property="ename" label="姓名" width="120"></el-table-column>
          <el-table-column property="sex" label="性别" width="120"></el-table-column>
          <el-table-column property="phone" label="联系电话" width="120"></el-table-column>
          <el-table-column property="hiredate" label="入职时间" width="120"></el-table-column>
          <el-table-column property="address" label="住址" width="120"></el-table-column>
          <el-table-column property="email" label="电子邮件" width="120"></el-table-column>
          <el-table-column label="头像" width="120">
            <template slot-scope="scope">
              <img :src="scope.row.path" width="40" height="40" />
              <img src="./assets/魔教蔡徐坤.jpg" width="40" height="40" />
            </template>
          </el-table-column>
          <el-table-column label="操作" width="50">
            <template slot-scope="scope">
              <el-button size="mini" type="primary">编辑{{ scope.row.eid}}</el-button>
              <el-button size="mini" type="danger">删除</el-button>
            </template>
          </el-table-column>
          <el-table-colunm width="120px" lable="query">
            <el-input
               placeholder="请输入内容"
               prefix-icon="el-icon-search"
               v-model="tj">
             </el-input>
          </el-table-colunm>
        </el-table>
      </el-main>
    </el-container>
    <el-footer style="text-align: center;"><el-rate v-model="value" show-text></el-rate></el-footer>
  </el-container>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

<script>
export default {
  data () {
    return {
      value: null,
      isCollapse: false,
      tj: null
    }
  },
  methods: {},
  created () {
    this.$store.dispatch('selectAll')
  }
}
</script>
