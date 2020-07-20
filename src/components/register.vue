<template>
 <el-row>
    <el-col :span="8" :offset="8">
      <el-card shadow="always">
        <div slot="header"><h1>登录</h1></div>
        <el-form ref="form" :model="form" label-width="80px" :rules="rules">
          <el-form-item label="用户名" prop="name"><el-input v-model="form.name"></el-input></el-form-item>
          <el-form-item label="密码" prop="pwd"><el-input v-model="form.pwd"></el-input></el-form-item>
          <el-form-item>
            <div align="right"><a href="#">忘记密码</a></div>
            <el-row>
              <el-col :span="3"><el-button type="success" @click="sumbit()">登录</el-button></el-col>
              <el-col :span="3" :offset="16"><el-button type="primary" @click="sumbit()">注册</el-button></el-col>
            </el-row>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
</script>

<style>
</style>
