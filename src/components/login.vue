<template>
  <el-row>
    <el-col :span="8" :offset="8">
      <el-card shadow="always">
        <div slot="header"><h1>登录</h1></div>
        <el-form ref="form" :model="form" label-width="80px" :rules="rules">
          <el-form-item label="用户名" prop="uname"><el-input v-model="form.uname"></el-input></el-form-item>
          <el-form-item label="密码" prop="password"><el-input v-model="form.password"></el-input></el-form-item>
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
export default {
  name: 'login',
  data () {
    return {
      form: {
        uname: '',
        password: ''
      },
      rules: {
        uname: [{ required: true, message: '请输入用户名', trigger: 'blur' }, { min: 6, max: 8, message: '用户名长度在 6 到 8 个字符', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }, { min: 6, max: 8, message: '密码长度在 6 到 8 个字符', trigger: 'blur' }]
      }
    }
  },
  methods: {
    sumbit () {
      const h = this.$createElement
      this.$notify({
        title: '芜湖',
        message: h('i', { style: 'color: teal' }, '敲你马')
      })
    }
  }
}
</script>
<style></style>
