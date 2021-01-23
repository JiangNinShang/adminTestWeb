<template>
  <div id="app">
    <router-view />
    <!-- <Player></Player> -->
    <aplayer :music="audio[0]" :list="audio" loop="all" :autoplay="true" style="position:absolute;left:0;bottom:0;width: 300px;"></aplayer>
  </div>
</template>

<script>
// import Player from 'zw-player'
import aplayer from 'vue-aplayer'
export default {
  name: 'App',
  data () {
    return {
      // 音频列表
      audio: [
        {
          title: '安河桥',
          artist: '演唱：宋冬野',
          url: 'http://fs.pc.kugou.com/202101221921/c5ab20a85328824b639675b749aca1fe/G202/M06/0C/10/Cg4DAF5trh6ALfzXAD1JyzTgRHo016.mp3',
          pic:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.kuwo.cn%2Fstar%2Falbumcover%2F240%2F14%2F36%2F1884246362.jpg&refer=http%3A%2F%2Fimg1.kuwo.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613906502&t=787448721e715468f1327c68c352d6d1'
        },
        {
          title: '星辰大海',
          artist: '演唱：黄霄雲',
          url:
            'http://m701.music.126.net/20210123085801/79e15b153b12b55af6c906be552b12be/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/5755656652/d229/b16b/b683/693842be1f3c1ea12c9a15c8b6400ba6.mp3',
          pic:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201912%2F02%2F20191202115015_wlJKL.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613906654&t=65ffc1a45c180479e314cdfe69a4bbdd'
        },
        {
          title: '天下潮',
          artist: '演唱：雪中悍刀行',
          url: 'http://m8.music.126.net/20210122194725/ce921b744bcf1083831839f7a96bccd8/ymusic/ab22/1a74/4cd5/467da089b325ce9f088bcdf4e54ae1e0.mp3',
          pic: '../static/img/红衣踏黄河.jpg'
        },
        {
          title: 'Love Is Gone',
          artist: '演唱：Abaydulla-Fm',
          url:
            'http://m801.music.126.net/20210123084425/ed117185afdd24bce3cbda96350a3c99/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/5511971430/e0d7/c4b4/6b33/1b33380811f15b18fc731ccb9f56ca84.mp3',
          pic: 'https://imgsa.baidu.com/forum/w%3D580/sign=d62277561cdfa9ecfd2e561f52d1f754/510fd9f9d72a605901dcf4502534349b023bbaaf.jpg'
        },
        {
          title: 'Blame',
          artist: '演唱：Calvin Harris',
          url: 'http://m8.music.126.net/20210123084738/710a2e734ad164dd7048e8f3ab130f52/ymusic/f893/6591/83ef/9a52b62be46cf52eacfc4a2f6143da15.mp3',
          pic: 'https://bkimg.cdn.bcebos.com/pic/7dd98d1001e93901491ca97a78ec54e736d19653?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg'
        }
      ]
    }
  },
  components: {
    // Player,
    aplayer
  },
  created () {
    this.$nextTick(() => {
      // 禁用右键
      document.oncontextmenu = new Function('event.returnValue=false')
      // 禁用选择
      document.onselectstart = new Function('event.returnValue=false')
    })
  }
}
</script>

<style></style>
