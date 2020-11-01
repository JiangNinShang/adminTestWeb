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
        <el-input style="width: 30%;" placeholder="请输入电话号码" sreadonly="false" v-model="phone" suffix-icon="el-icon-phone-outline">
          <template slot="append">
            <el-button type="successs" @click="fs">{{ time }}</el-button>
          </template>
        </el-input>
        <br />
        <br />
        <el-input style="width: 30%;" placeholder="请输入验证码" v-model="yzm" clearable />
      </span>
      <span v-if="active == 2"><el-input style="width: 30%;" placeholder="请输入新密码" prefix-icon="el-icon-more" v-model="pwd" clearable /></span>
    </el-main>
    <el-footer>
      <span>
        <br />
        <el-button type="primary" style="width: 30%;" @click="xyb">下一步</el-button>
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
      phone: 19894368119,
      yzm: '',
      count: 60,
      time: '发送验证码',
      timeout: null,
      intervalId: null
    }
  },
  methods: {
    querySearchAsync (queryString, callback) {
      if (this.name !== '' && this.name !== null && undefined !== this.name) {
        var restaurants = this.restaurants
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          callback(results)
        }, 2000 * Math.random())
      } else {
        let giao = [{ value: '请输入用户名' }]
        callback(giao)
      }
    },
    createStateFilter (queryString) {
      return name => {
        return name.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
      }
    },
    xyb () {
      if (this.active < 3) {
        if (this.active === 0) {
          if (this.name !== '' && this.name !== null && undefined !== this.name) {
            this.active += 1
          }
        } else if (this.active === 1) {
          if (this.yzm !== '' && this.yzm !== null && undefined !== this.yzm) {
            this.active += 1
          }
        } else if (this.active === 2) {
          if (this.pwd !== '' && this.pwd !== null && undefined !== this.pwd) {
            this.active += 1
          }
        }
      } else {
        this.$router.replace('/')
      }
    },
    fs () {
      if (this.intervalId != null) {
        return
      }
      this.intervalId = setInterval(() => {
        this.count -= 1
        if (this.count === 0) {
          clearInterval(this.intervalId) // 清除计时器
          this.intervalId = null // 设置为null
          this.time = '发送验证码'
        } else {
          this.time = this.count + '秒后重发'
        }
      }, 1000)
    }
  },
  mounted () {
    this.store.dispatch('getName').then(tes => {
      for (var k in tes.data.data) {
        let giao = { value: k }
        this.restaurants.push(giao)
      }
    })
  }
}
</script>

<style>
.el-autocomplete {
  width: 30%;
}
</style>
