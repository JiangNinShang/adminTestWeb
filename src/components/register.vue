<template>
  <el-row>
    <el-col :span="12" :offset="6">
      <el-card shadow="always">
        <div slot="header" align="center"><h1>注&nbsp;&nbsp;&nbsp;册</h1></div>
        <el-form ref="form" :model="form" label-width="80px" :rules="rules" label-position="right">
          <el-form-item label="用户名 :" prop="uname"><el-input v-model="form.uname" suffix-icon="el-icon-s-custom" placeholder="请输入用户名" clearable /></el-form-item>
          <el-form-item label="密码 :" prop="upwd"><el-input v-model="form.upwd" suffix-icon="el-icon-more" placeholder="请输入密码" show-password clearable /></el-form-item>
          <el-form-item label="密码强度:">
            <div class="input_span">
              <span id="one"></span>
              <span id="two"></span>
              <span id="three"></span>
            </div>
            <div id="font">
              <span>弱</span>
              <span>中</span>
              <span>强</span>
            </div>
          </el-form-item>
          <el-form-item label="电话号码 :" prop="phone"><el-input v-model="form.phone" suffix-icon="el-icon-phone-outline" placeholder="请输入电话号码" clearable /></el-form-item>
          <el-form-item label="年龄 :" prop="age" align="left"><el-input-number v-model="form.age" :min="1" :max="150" label="请输入年龄"></el-input-number></el-form-item>
          <el-form-item label="性别 :" prop="sex" align="center">
            <el-radio-group v-model="form.sex">
              <el-row>
                <el-col :span="5"><el-radio label="男">男</el-radio></el-col>
                <el-col :span="5" :offset="14"><el-radio label="女">女</el-radio></el-col>
              </el-row>
            </el-radio-group>
          </el-form-item>
          <!-- <el-form-item label="地址 :" prop="city">
            <area-cascader :level="1" type="text" placeholder="请选择家庭住址" v-model="form.city" :data="$pcaa" clearable /> -->
          <!-- </el-form-item> -->
          <el-form-item label="电子邮箱 :" prop="mail">
            <el-autocomplete
              class="inline-input"
              v-model="form.mail"
              :fetch-suggestions="querySearch"
              :trigger-on-focus="false"
              placeholder="请输入电子邮箱"
              suffix-icon="el-icon-s-promotion"
              clearable
            />
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
    <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
      <span>需要注意的是内容是默认不居中的</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </el-row>
</template>

<script>
export default {
  name: 'register',
  data () {
    let checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'))
      }
      if (!Number.isInteger(value)) {
        callback(new Error('请输入数字值'))
      }
      callback()
    }
    let email = (rule, value, callback) => {
      const reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if (value == '' || value == undefined || value == null) {
        callback()
      } else {
        if (!reg.test(value)) {
          callback(new Error('请输入正确的邮箱地址'))
        } else {
          callback()
        }
      }
    }
    let isPhone = (rule, value, callback) => {
      const reg = /^[1][3,4,5,7,8,9][0-9]{9}$/
      if (value == '' || value == undefined || value == null) {
        callback(new Error('请输入电话号码'))
      } else {
        if (!reg.test(value) && value != '') {
          callback(new Error('请输入正确的电话号码'))
        } else {
          callback()
        }
      }
    }
    // vr cs = (rule, value, callback) => {
    //   if (!value) {
    //     return callback(new Error('地址不能为空 请选择地址'))
    //   }
    // }
    return {
      centerDialogVisible: false,
      restaurants: [{ value: '@qq.com' }, { value: '@126.com' }, { value: '@163.com' }],
      form: {
        uname: '',
        upwd: '',
        phone: '',
        sex: '男',
        age: 18,
        // city: '',
        mail: ''
      },
      msgText: '',
      rules: {
        uname: [{ required: true, message: '请输入用户名', trigger: 'blur' }, { min: 1, max: 8, message: '用户名长度在 6 到 8 个字符', trigger: 'blur' }],
        upwd: [{ required: true, message: '请输入密码', trigger: 'blur' }, { min: 6, max: 8, message: '密码长度在 6 到 8 个字符', trigger: 'blur' }],
        age: [{ validator: checkAge, trigger: 'blur' }],
        // city: [{ validator: cs, trigger: 'blur' }],
        phone: [{ validator: isPhone, trigger: 'blur' }],
        mail: [{ validator: email, trigger: 'blur' }]
        // , 'change']
      }
    }
  },
  watch: {
    'form.upwd': {
      handler: function (newValue, oldValue) {
        this.msgText = this.checkStrong(newValue)
        if (this.msgText > 1 || this.msgText == 1) {
          $('#one').css('background', 'red')
        } else {
          $('#one').css('background', '#eee')
        }
        if (this.msgText > 2 || this.msgText == 2) {
          $('#two').css('background', 'orange')
        } else {
          $('#two').css('background', '#eee')
        }
        if (this.msgText == 4) {
          $('#three').css('background', '#00D1B2')
        } else {
          $('#three').css('background', '#eee')
        }
      }
    }
  },
  methods: {
    submitForm (form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          this.store.dispatch('register', this.form).then(tes => {
            if (tes.data) {
              this.$notify({
                title: '注册成功！',
                message: '欢迎您!' + this.form.uname,
                type: 'success'
              })
              this.centerDialogVisible = true
              this.$router.push('/')
            } else {
              this.$notify.error({
                title: '注册失败',
                message: '请检测您的账户是否存在'
              })
            }
          })
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
    },
    checkStrong (sValue) {
      var modes = 0
      // 正则表达式验证符合要求的
      if (sValue.length < 1) return modes
      if (/\d/.test(sValue)) modes++
      if (/[a-z]/.test(sValue)) modes++
      if (/[A-Z]/.test(sValue)) modes++
      if (/\W/.test(sValue)) modes++
      switch (modes) {
        case 1:
          return 1
          break
        case 2:
          return 2
          break
        case 3:
        case 4:
          return sValue.length < 12 ? 3 : 4
          break
      }
      return modes
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
#inputValue {
  width: 240px;
  margin-left: 20px;
  padding-left: 10px;
  border-radius: 3px;
}
.input_span span {
  display: inline-block;
  width: 85px;
  height: 10px;
  background: #eee;
  line-height: 20px;
}

#one {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-right: 0px solid;
  margin-left: 20px;
  margin-right: 3px;
}

#two {
  border-left: 0px solid;
  border-right: 0px solid;
  margin-left: -5px;
  margin-right: 3px;
}

#three {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left: 0px solid;
  margin-left: -5px;
}
#font span:nth-child(1) {
  color: red;
  margin-left: 60px;
}
#font span:nth-child(2) {
  color: orange;
  margin: 0 65px;
}
#font span:nth-child(3) {
  color: #00d1b2;
}
</style>
