<template></template>

<script>
const format = 'YYYY-MM-DD HH:mm:ss';
export default {
  data() {
    return {
      time: this.$moment().date()
    };
  }
};
</script>

<style></style>
