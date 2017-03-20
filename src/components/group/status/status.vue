<template>
  <div class="status">
    <h3 class="title">
      {{status.label}}
    </h3>
  </div>
</template>

<script>
  export default {
    props: {
      status: {
        type: Object
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .status {
    background: #fff;
    padding: 30px;
    text-align: center;
    color: #000;
    .title {
      font-size: 18px;
      color: #E94850;
    }
  }    
</style>
