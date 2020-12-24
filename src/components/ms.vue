<template>
  <el-container>
    <el-header class="text"><h1 style="color:red;">限时秒杀</h1></el-header>
    <el-main style="margin-top: 80px">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-card shadow="never" class="text">
            <h1 style="font-size: 25px;">时间区间</h1>
            <el-image src="http://img.doutula.com/production/uploads/image/2017/11/18/20171118014731_AXirgI.gif"></el-image>
            <h1>距离结束还有</h1>
            <!-- 时间 -->
            {{this.$moment().date()}}
          </el-card>
        </el-col>
        <el-col :span="18" style="margin-top: 20px;">
          <vueper-slides
            class="no-shadow"
            :visible-slides="3"
            :slide-ratio="1 / 4"
            autoplay
            :dragging-distance="70"
            progress
            fixed-height="600px"
            style="width: 90%;text-align:center;margin-left: 25px;"
          >
            <vueper-slide v-for="(slide, i) in sp" :key="i">
              <template v-slot:content>
                <div style="margin-top: 10px;">
                  <el-link href="#">
                    <el-card shadow="hover" class="text" style="width: 250px;">
                      <el-image :src="slide.img" style="width: 200px;height: 300px;"></el-image>
                      <h1>{{ slide.name }}</h1>
                      <p>
                        <font color="darkgray" size="3px">{{ slide.js }}</font>
                      </p>
                      <font color="orangered" size="5px">￥{{ slide.new }}</font>
                      <font style="text-decoration:line-through;margin-left: 20px;" color="darkgray" size="3px">￥{{ slide.old }}</font>
                    </el-card>
                  </el-link>
                </div>
              </template>
            </vueper-slide>
          </vueper-slides>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
export default {
  props: ['sp'],
  data() {
    return {
    };
  },
  components: { vueperSlides: VueperSlides, vueperSlide: VueperSlide }
};
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
