<template>
    <div class="user-info">
      <div class="thumb" :class="{'active':isCreateUser}">
        <img :src="url" alt="">
      </div>
    </div>  

</template>

<script>
  export default {
    props: {
      isCreateUser: {
        type: Boolean,
        default: false
      },
      url: {
        type: String,
        default: 'http://pinduoduoimg.yangkeduo.com/base/avatar_4_64.png'
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .user-info {
    display: inline-block;
    height: 49px;
    margin-right: 10px;
    overflow: hidden;
    width: 49px;
    img {
      background-clip: padding-box;
      border-radius: 49px;
      box-shadow: 0 0 0 2px #fff;
      display: block;
      height: 45px;
      overflow: hidden;
      width: 45px;
    }
    .thumb {
      &.active {
        background-clip: padding-box;
        background-color: #df2127;
        border: 1px solid #fff;
        border-radius: 21px;
        color: #fff;
        content: "\53D1\8D77";
        font-size: 8px;
        height: 12px;
        line-height: 10px;
        position: absolute;
        right: 0;
        text-align: center;
        top: 0;
        width: 28px;
      }
    }
  }
</style>
