<template>
  <span class="weui-tabbar__badge-label">
        <i class="weui-tabbar__icon iconfont" :class="icon"></i>
        <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">
          {{number}}
        </span>
  </span>
</template>

<script>
  export default {
    props: {
      icon: {
        type: String
      },
      number: {
        type: Number
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .weui-tabbar__badge-label {
    display: inline-block;position: relative;
  }
</style>
