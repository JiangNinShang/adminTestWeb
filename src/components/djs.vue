<template>
    <font size="10" color="red">{{ h }}:{{ f }}:{{ m }}</font>
</template>

<script>
export default {
  props: ['end', 'start'],
  // 接收父组件传来的值
  data () {
    return {
      h: 7,
      f: 59,
      m: 59,
      sb: 0
    }
  },
  methods: {
    audi () {
      clearInterval(this.sb)
      this.sb = setInterval(() => {
        this.m--
        if (this.m == 0) {
          if (this.f != 0) {
            this.f--
            this.m = 59
          } else if (this.h == 0 && this.f == 0) {
            this.h = 7
            this.f = 59
            this.m = 59
            this.add()
          }
        } else if (this.f == 0) {
          if (this.h != 0) {
            this.h--
            this.f = 59
          }
        }
      }, 1000)
    },
    add () {
      this.$emit('add')
    }
  },
  created () {
    this.audi()
  }
}
</script>

<style></style>
