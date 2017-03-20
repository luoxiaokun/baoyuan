<template>
  <div class="loading-mask" style="opacity: 1;">
    <img src="http://omhf8n8jd.bkt.clouddn.com/loading/1.gif" alt="" class="loading">
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" scoped>
  .loading-mask {
    position: absolute;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(255,255, 255, 1);
  }
  .loading {
    position: fixed;
    width: 100px;
    height: 100px;
    top: 45%;
    right: 40%;
    z-index: 2000;
  }
</style>
