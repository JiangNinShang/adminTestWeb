<template>
  <el-container>
    <el-header class="text"><h1 style="color:red;">限时秒杀</h1></el-header>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-card shadow="never" class="text">
            <h1 style="font-size: 25px;">{{ time }}</h1>
            <el-image src="https://images.weserv.nl/?url=https://file.pzhanpaihang.com/p/85816883/0_c3374d55d00196816c9c3f796a39dd6f.jpg"></el-image>
            <h1>距离结束还有</h1>
            <el-row>
              <el-col :span="4" :offset="3" class="time">0{{ Hours }}</el-col>
              <el-col :span="1" :offset="1" class="time">:</el-col>
              <el-col :span="4" :offset="1" class="time" v-if="Minutes > 9">{{ Minutes }}</el-col>
              <el-col :span="4" :offset="1" class="time" v-else>0{{ Minutes }}</el-col>
              <el-col :span="1" :offset="1" class="time">:</el-col>
              <el-col :span="4" :offset="1" class="time" v-if="Seconds > 9">{{ Seconds }}</el-col>
              <el-col :span="4" :offset="1" class="time" v-else>0{{ Seconds }}</el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col :span="6" v-for="i in 3" :key="i">
          <el-link href="#">
            <el-card shadow="hover" class="text">
              <el-image src="https://images.weserv.nl/?url=https://file.pzhanpaihang.com/p/85816883/0_c3374d55d00196816c9c3f796a39dd6f.jpg" style="margin-top: 30px;"></el-image>
              <h1>鸡脖</h1>
              <!-- 商品介绍 -->
              <p><font color="darkgray" size="3px">好吃不贵</font></p>
              <!-- 新旧价格 -->
              <font color="orangered" size="5px">10.00</font>
              <font style="text-decoration:line-through;margin-left: 20px;" color="darkgray" size="3px">11.50</font>
            </el-card>
          </el-link>
        </el-col>
      </el-row>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      time: '',
      Hours: 0,
      Minutes: 0,
      Seconds: 0
    }
  },
  methods: {
    // 倒计时3小时，结束后将几点场增加
    djs () {
      setInterval(() => {
        var myDate = new Date()
        this.Hours = myDate.getHours() + 3 - myDate.getHours() // 获取系统时，
        this.Minutes = 60 - myDate.getMinutes() // 分
        if (this.Minutes === 0) {
          this.Hours -= 1
        }
        this.Seconds = 60 - myDate.getSeconds() // 秒
      }, 1000)
    },
    timi (myDate) {
      this.time = myDate.getHours() + ':00' + '  ' + '场'
      setInterval(() => {
        var myDate = new Date()
        this.time = myDate.getHours() + ':00' + '  ' + '场'
      }, 10800000)
    }
  },
  watch: {},
  components: {},
  created () {
    var myDate = new Date()
    this.djs()
    this.timi(myDate)
  }
}
</script>

<style>
.time {
  font-size: 30px;
  color: orangered;
}
.text {
  font-size: 30px;
  text-align: center;
}
</style>
