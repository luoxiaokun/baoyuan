<template>
  <header class="bar bar-nav">
    <a @click="goBack" class="icon iconfont pull-left icon-fanhui"></a>
    <h1 class="title">{{title}}</h1>
  </header>
</template>

<script>
  export default {
    props: {
      title: {
        type: String
      }
    },
    methods: {
      goBack () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="stylus" scoped>
    .pull-left {
    float: left;
  }
  .bar {
    position: absolute;
    right: 0;
    left: 0;
    z-index: 10;
    height: 44px;
    padding: 0px 10px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: #fff;
    .icon {
      position: relative;
      z-index: 20;
      padding: 10px 2px;
      font-size: 20px;
      line-height: 22px;
    }
    a {
      color: #000;
    }
    
    .title {
      position: absolute;
      display: block;
      width: 100%;
      padding: 0;
      margin: 0 -7px;
      font-size: 18px;
      line-height: 44px;
      color: #3d4145;
      text-align: center;
      white-space: nowrap;
    }
  }
  .bar-nav {
    top: 0;
  }
</style>
