<template>
  <el-container style="width: 100%;" align="center">
    <el-header>
      <el-steps :active="active" simple finish-status="success">
        <el-step title="用户名"></el-step>
        <el-step title="验证身份"></el-step>
        <el-step title="设置新密码"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>
    </el-header>
    <el-main>
      <span v-if="active == 0">
        <el-autocomplete v-model="name" style="width: 30%;" :fetch-suggestions="querySearchAsync" placeholder="请输入用户名" prefix-icon="el-icon-user" clearable />
      </span>
      <span v-if="active == 1">
        <el-input style="width: 30%;" placeholder="请输入电话号码" sreadonly="false" v-model="phone" suffix-icon="el-icon-phone-outline" clearable>
          <template slot="append">
            <el-button type="successs" @click="fs">{{ time }}</el-button>
          </template>
        </el-input>
        <br />
        <br />
        <el-input style="width: 30%;" placeholder="请输入验证码" v-model="yzm" clearable />
      </span>
      <span v-if="active == 2"><el-input style="width: 30%;" placeholder="请输入新密码" prefix-icon="el-icon-more" v-model="pwd" clearable @blur="cao" /></span>
    </el-main>
    <el-footer>
      <span>
        <br />
        <el-button type="primary" style="width: 30%;" @click="xyb" :disabled="status">下一步</el-button>
      </span>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'czmm',
  data () {
    return {
      active: 0,
      restaurants: [],
      name: '',
      pwd: '',
      phone: '',
      yzm: '',
      count: 60,
      time: '发送验证码',
      timeout: null,
      intervalId: null,
      status: true,
      giao: []
    }
  },
  methods: {
    querySearchAsync (queryString, callback) {
      if (this.name !== '' && this.name !== null && undefined !== this.name) {
        var restaurants = this.restaurants
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants
        if (results.length === 0) {
          this.$message({
            showClose: true,
            message: '该用户不存在',
            type: 'error',
            center: true
          })
          // 关闭所有弹出
          this.$message.closeAll()
          this.status = true
          callback(this.giao)
          return
        }
        this.status = false
        callback(results)
      } else {
        this.status = true
        callback(this.giao)
      }
    },
    createStateFilter (queryString) {
      return name => {
        return name.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
      }
    },
    xyb () {
      if (this.active === 0) {
        if (this.name !== '' && this.name !== null && undefined !== this.name) {
          this.active += 1
          this.status = true
        }
      } else if (this.active === 1) {
        if (this.yzm !== '' && this.yzm !== null && undefined !== this.yzm && this.phone != null && this.phone != '' && this.phone != undefined) {
          this.active += 1
          this.status = true
        }
      } else if (this.active === 2) {
        if (this.pwd !== '' && this.pwd !== null && undefined !== this.pwd) {
          this.active += 1
        }
      } else if (this.active === 3) {
        this.store.dispatch('updatePwd', { name: this.name, pwd: this.pwd }).then(tes => {
          this.$router.push('/')
        })
      }
    },
    fs () {
      if (this.phone != null && this.phone != '' && this.phone != undefined) {
        this.store.dispatch('getbyName', this.name).then(tes => {
          for (var key in tes.data.data) {
            if (tes.data.data[key].phone != this.phone) {
              this.$message({
                showClose: true,
                message: '与注册的电话不一致',
                type: 'error'
              })
            } else {
              const reg = /^[1][3,4,5,7,8,9][0-9]{9}$/
              if (this.phone.length != 11) {
                this.$message({
                  showClose: true,
                  message: '电话号位为11位数，当前为' + this.phone.length + '位',
                  type: 'warning'
                })
              }
              if (!reg.test(this.phone)) {
                this.$message({
                  showClose: true,
                  message: '输入的电话号码不正确',
                  type: 'error'
                })
              }
              if (this.intervalId != null) {
                return
              }
              this.intervalId = setInterval(() => {
                this.count -= 1
                if (this.count == 0) {
                  clearInterval(this.intervalId) // 清除计时器
                  this.intervalId = null // 设置为null
                  this.time = '发送验证码'
                } else {
                  this.time = this.count + '秒后重发'
                }
              }, 1000)
              let audi = Math.floor(Math.random() * (9999 - 1000)) + 1000
              this.yzm = audi
              this.$notify({
                title: '验证码',
                message: audi,
                type: 'success'
              })
              this.status = false
            }
          }
        })
      } else {
        this.$message({
          showClose: true,
          message: '请输入电话号码',
          type: 'error'
        })
      }
    },
    wdnmd () {
      this.store.dispatch('getName').then(tes => {
        for (var k in tes.data.data) {
          let giao = { value: k }
          this.restaurants.push(giao)
        }
      })
    },
    cao () {}
  },
  mounted () {
    this.wdnmd()
  },
  watch: {
    pwd: function (newValue, oldValue) {
      const yz = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,8}$/
      if (!yz.test(newValue)) {
        this.status = true
      } else {
        this.status = false
      }
    }
  }
}
</script>

<style>
.el-autocomplete {
  width: 30%;
}
</style>
