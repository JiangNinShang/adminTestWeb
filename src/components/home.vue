<template>
  <el-container>
    <el-header><nk></nk></el-header>
    <el-container>
      <el-aside style="width: 11%;text-align: center;margin-left: 5%;"><cog :item="item"></cog></el-aside>
      <el-main>
        <el-carousel :interval="5000" height="680px" arrow="always">
          <el-carousel-item v-for="(i, index) in img" :key="index">
            <!-- 大图预览，需要数组 preview-src-list="item"-->
            <!-- 跳转路由，name从那里来 -->
            <router-link :to="{ name: 'login' }"><el-image :src="i"></el-image></router-link>
          </el-carousel-item>
        </el-carousel>
        <br />
        <ms :sp="sp"></ms>
      </el-main>
      <el-aside style="width: 15%;"><cbl :cb="cb"></cbl></el-aside>
    </el-container>
    <el-footer style="height: 200px;"><footsie></footsie></el-footer>
  </el-container>
</template>

<script>
import cog from './ClassificationOfGoods.vue'
import ms from './ms.vue'
import cbl from './cbl.vue'
import nk from './nk.vue'
import footsie from './footsie.vue'
export default {
  data () {
    return {
      img: [
        '../../static/img/白狐儿脸.jpg',
        '../../static/img/北凉不悲凉.jpg',
        '../../static/img/曹长卿.jpg',
        '../../static/img/陈芝豹.jpg',
        '../../static/img/大雪龙骑.jpg',
        '../../static/img/挡剑.jpg',
        '../../static/img/二姐大战陈芝豹.jpg',
        '../../static/img/孤身闯北莽.jpg',
        '../../static/img/呵呵姑娘.jpg',
        '../../static/img/剑开天门.jpg',
        '../../static/img/剑来.jpg'
      ],
      item: [
        { value: '春季商品', giao: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }, { value: '6' }, { value: '7' }, { value: '8' }] },
        { value: '夏季商品', giao: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }, { value: '6' }, { value: '7' }, { value: '8' }] },
        { value: '秋季商品', giao: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }, { value: '6' }, { value: '7' }, { value: '8' }] },
        { value: '冬季商品', giao: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }, { value: '6' }, { value: '7' }, { value: '8' }] },
        { value: '冬季商品', giao: [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }, { value: '6' }, { value: '7' }, { value: '8' }] }
      ],
      cb: [
        {
          class: 'el-icon-user',
          font: '关于我们',
          src: 'info'
        },
        {
          // el-icon-shopping-cart-2
          class: 'el-icon-shopping-cart-full',
          font: '购物车',
          src: '/',
          type: 'badge',
          num: '0'
        },
        {
          class: 'el-icon-coin',
          font: '消费记录',
          src: '/',
          type: 'badge',
          num: '0'
        },
        {
          // el-icon-chat-dot-round
          class: 'el-icon-chat-round',
          font: '我的消息',
          src: '/',
          type: 'badge',
          num: '0'
        },
        {
          class: 'el-icon-share',
          font: '分享好友',
          src: '/'
        }
      ],
      sp: [
        { img: 'http://img.doutula.com/production/uploads/image/2017/11/18/20171118014731_AXirgI.gif', name: 'giao', js: 'js', new: 11.0, old: 15.15 },
        { img: 'http://img.doutula.com/production/uploads/image/2017/11/18/20171118014731_AXirgI.gif', name: 'giao', js: 'js', new: 11.0, old: 15.15 },
        { img: 'http://img.doutula.com/production/uploads/image/2017/11/18/20171118014731_AXirgI.gif', name: 'giao', js: 'js', new: 11.0, old: 15.15 },
        { img: 'http://img.doutula.com/production/uploads/image/2017/11/18/20171118014731_AXirgI.gif', name: 'giao', js: 'js', new: 11.0, old: 15.15 },
        { img: 'http://img.doutula.com/production/uploads/image/2017/11/18/20171118014731_AXirgI.gif', name: 'giao', js: 'js', new: 11.0, old: 15.15 },
        { img: 'http://img.doutula.com/production/uploads/image/2017/11/18/20171118014731_AXirgI.gif', name: 'giao', js: 'js', new: 11.0, old: 15.15 },
        { img: 'http://img.doutula.com/production/uploads/image/2017/11/18/20171118014731_AXirgI.gif', name: 'giao', js: 'js', new: 11.0, old: 15.15 },
        { img: 'http://img.doutula.com/production/uploads/image/2017/11/18/20171118014731_AXirgI.gif', name: 'giao', js: 'js', new: 11.0, old: 15.15 },
        { img: 'http://img.doutula.com/production/uploads/image/2017/11/18/20171118014731_AXirgI.gif', name: 'giao', js: 'js', new: 11.0, old: 15.15 },
        { img: 'http://img.doutula.com/production/uploads/image/2017/11/18/20171118014731_AXirgI.gif', name: 'giao', js: 'js', new: 11.0, old: 15.15 },
        { img: 'http://img.doutula.com/production/uploads/image/2017/11/18/20171118014731_AXirgI.gif', name: 'giao', js: 'js', new: 11.0, old: 15.15 },
        { img: 'http://img.doutula.com/production/uploads/image/2017/11/18/20171118014731_AXirgI.gif', name: 'giao', js: 'js', new: 11.0, old: 15.15 },
        { img: 'http://img.doutula.com/production/uploads/image/2017/11/18/20171118014731_AXirgI.gif', name: 'giao', js: 'js', new: 11.0, old: 15.15 },
        { img: 'http://img.doutula.com/production/uploads/image/2017/11/18/20171118014731_AXirgI.gif', name: 'giao', js: 'js', new: 11.0, old: 15.15 },
        { img: 'http://img.doutula.com/production/uploads/image/2017/11/18/20171118014731_AXirgI.gif', name: 'giao', js: 'js', new: 11.0, old: 15.15 },
        { img: 'http://img.doutula.com/production/uploads/image/2017/11/18/20171118014731_AXirgI.gif', name: 'giao', js: 'js', new: 11.0, old: 15.15 },
        { img: 'http://img.doutula.com/production/uploads/image/2017/11/18/20171118014731_AXirgI.gif', name: 'giao', js: 'js', new: 11.0, old: 15.15 }
      ]
    }
  },
  methods: {},
  components: {
    cog: cog,
    ms: ms,
    cbl: cbl,
    footsie: footsie,
    nk: nk
  }
}
</script>

<style>
.test {
  border: 1px red solid;
}
</style>
