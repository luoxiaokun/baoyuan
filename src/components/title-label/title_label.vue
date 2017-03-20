<template>
    <div class="title-label">
      <h5 class="title">
        {{title}}
        <i class="iconfont icon-right-circle"></i>
      </h5>
    </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .title-label {
    padding-top: 16px;
    padding-bottom: 15px;
    .title {
      text-align: center;
      font-size: 16px;
      
      color: #000;
      i {
        color: rgb(147, 153, 159);
        font-size: 10px;
        margin-left: 2px;
      }
    }
  }
</style>
