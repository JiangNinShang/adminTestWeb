<template>
  <el-row style="margin-top: 0px;">
    <el-col :span="12" :offset="6">
      <el-card shadow="always">
        <div slot="header" align="center"><h1>登&nbsp;&nbsp;&nbsp;录</h1></div>
        <el-form ref="form" :model="form" label-width="100px" :rules="rules" label-position="right">
          <el-form-item label="用户名:" prop="uname"><el-input v-model="form.uname" suffix-icon="el-icon-s-custom" clearable></el-input></el-form-item>
          <el-form-item label="密码:" prop="upwd"><el-input v-model="form.upwd" show-password clearable></el-input></el-form-item>
          <el-form-item>
            <el-row>
              <el-col :span="5"><el-checkbox v-model="form.auto">自动登录</el-checkbox></el-col>
              <el-col :span="5" :offset="14"><el-button type="text" @click="wj">忘记密码？</el-button></el-col>
            </el-row>
          </el-form-item>
          <div align="center">
            <h1>其他登录方式</h1>
            <el-row>
              <el-col :span="6" :offset="1">
                <!-- QQ -->
                <el-avatar src="http://pics.sc.chinaz.com/Files/pic/icons128/5949/q8.png" />
              </el-col>
              <el-col :span="6" :offset="3">
                <!-- 微信 -->
                <el-avatar src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1377547971,3453629665&fm=26&gp=0.jpg" />
              </el-col>
              <el-col :span="6" :offset="2">
                <!-- 支付宝 -->
                <el-avatar src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1391225299,4246751308&fm=26&gp=0.jpg" />
              </el-col>
            </el-row>
          </div>
          <br />
          <br />
          <el-form-item>
            <el-row>
              <el-col :span="3"><el-button type="success" @click="sumbit('form')">登录</el-button></el-col>
              <el-col :span="3" :offset="16"><el-button type="primary" @click="register">注册</el-button></el-col>
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
        upwd: '',
        auto: false
      },
      rules: {
        uname: [{ required: true, message: '请输入用户名', trigger: 'blur' }, { min: 1, max: 8, message: '用户名长度在 6 到 8 个字符', trigger: 'blur' }],
        upwd: [{ required: true, message: '请输入密码', trigger: 'blur' }, { min: 6, max: 8, message: '密码长度在 6 到 8 个字符', trigger: 'blur' }]
      }
    }
  },
  methods: {
    sumbit (form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          this.store.dispatch('login', this.form).then(tes => {
            if (tes.data) {
              this.$notify({
                message: '欢迎您!' + this.form.uname,
                type: 'success'
              })
            } else {
              this.$notify.error({
                title: '登录失败',
                message: '请检测您的账户是否存在'
              })
            }
          })
        }
      })
    },
    register () {
      this.$router.push('/register')
    },
    wj () {
      this.$router.push('/czmm')
    }
  }
}
</script>
<style>
.area-select.large {
  width: 100%;
  line-height: 20px;
}
.el-autocomplete {
  width: 100%;
}
.el-radio-group {
  width: 100%;
}
.el-form-item.is-required:not(.is-no-asterisk) .el-form-item__label-wrap .el-form-item__label:before,
.el-form-item.is-required:not(.is-no-asterisk) .el-form-item__label:before {
  content: none;
}
.el-form-item label:after {
  content: '';
  display: inline-block;
  width: 100%;
}

.el-form-item__label {
  text-align: justify;
  height: 50px;
}

.el-form-item.is-required .el-form-item__label:before {
  content: none !important;
}
</style>
