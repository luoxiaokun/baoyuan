<template>
  <span class="weui-tabbar__badge-label">
    <i class="weui-tabbar__icon iconfont" :class="icon"></i>
    <span class="weui-badge weui-badge_dot" style="position: absolute;top: 0;right: -6px;" v-show="isShow"></span>
  </span>
</template>

<script>
  export default {
    props: {
      icon: {
        type: String
      },
      isShow: {
        type: Boolean
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .weui-tabbar__badge-label {
    display: inline-block;position: relative;
  }
</style>
