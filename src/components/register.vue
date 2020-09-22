<template>
  <el-row>
    <el-col :span="12" :offset="6">
      <el-card shadow="always">
        <div slot="header" align="center"><h1>注&nbsp;&nbsp;&nbsp;册</h1></div>
        <el-form ref="form" :model="form" label-width="80px" :rules="rules" label-position="right">
          <el-form-item label="用户名 :" prop="uname"><el-input v-model="form.uname" suffix-icon="el-icon-s-custom" placeholder="请输入用户名" clearable/></el-form-item>
          <el-form-item label="密码 :" prop="password"><el-input v-model="form.password" suffix-icon="el-icon-more" placeholder="请输入密码" show-password clearable/></el-form-item>
          <el-form-item label="电话号码 :" prop="phone"><el-input v-model="form.phone" suffix-icon="el-icon-phone-outline" placeholder="请输入电话号码" clearable/></el-form-item>
          <el-form-item label="年龄 :" prop="age" align="left"><el-input-number v-model="form.age" :min="1" :max="150" label="请输入年龄" ></el-input-number></el-form-item>
          <el-form-item label="性别 :" prop="sex" align="center">
            <el-radio-group v-model="form.sex">
              <el-row>
                <el-col :span="5"><el-radio label="男">男</el-radio></el-col>
                <el-col :span="5" :offset="14"><el-radio label="女">女</el-radio></el-col>
              </el-row>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="地址 :" prop="city">
            <area-cascader :level="1" type="text" placeholder="请选择家庭住址" v-model="form.city" :data="$pcaa" clearable />
          </el-form-item>
          <el-form-item
            label="电子邮箱 :"
            prop="email"
            :rules="[{ required: true, message: '请输入邮箱地址', trigger: 'blur' }, { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }]"
          >
            <el-autocomplete class="inline-input" v-model="form.email" :fetch-suggestions="querySearch" :trigger-on-focus="false" placeholder="请输入电子邮箱" suffix-icon="el-icon-s-promotion" clearable/>
          </el-form-item>
          <el-form-item>
            <el-row>
              <el-col :span="3"><el-button type="success" @click="submitForm('form')">注册</el-button></el-col>
              <el-col :span="3" :offset="17"><el-button type="primary" @click="resetForm">返回登录</el-button></el-col>
            </el-row>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'register',
  data () {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    var cs = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('地址不能为空 请选择地址'))
      }
    }
    return {
      restaurants: [{ value: '@qq.com' }, { value: '@126.com' }, { value: '@163.com' }, { value: '@sohu.com' }],
      form: {
        uname: '',
        password: '',
        phone: '',
        sex: '男',
        age: '',
        city: '',
        email: ''
      },
      rules: {
        uname: [{ required: true, message: '请输入用户名', trigger: 'blur' }, { min: 6, max: 8, message: '用户名长度在 6 到 8 个字符', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }, { min: 6, max: 8, message: '密码长度在 6 到 8 个字符', trigger: 'blur' }],
        age: [{ validator: checkAge, trigger: 'blur' }],
        city: [{ validator: cs, trigger: 'blur' }],
        phone: [{ required: true, message: '请输入联系电话', trigger: 'blur' }, { min: 11, max: 11, message: '电话号码为11为', trigger: 'blur' }]
      }
    }
  },
  filters: {
    dh: function (value) {

    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm () {
      this.$router.push('/')
    },
    querySearch (queryString, callback) {
      let restaurants = this.restaurants
      // 把数组的浅复制换成深复制
      let results = JSON.parse(JSON.stringify(restaurants))
      for (let item in results) {
        results[item].value = queryString + '' + restaurants[item].value
      }
      callback(results)
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
</style>
