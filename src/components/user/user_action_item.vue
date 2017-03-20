<template>
  <router-link class="action-cell" tag="li" :to="url">
    <i class="icon" :class="[icon]"></i>
    <span>{{message}}</span>
    <span class="arrow"></span>
  </router-link>
</template>

<script>
  export default {
    props: {
      url: {
        type: Object
      },
      icon: {
        type: String
      },
      message: {
        type: String
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .action-cell {
    color: #000;
    padding: 10px 20px;
    border-bottom: 1px solid #D9D9D9;
    text-align: left;
    position: relative;
    i {
      color: #999;
      font-size: 24px;
    }  
    .arrow {
      &:after {
        content: " ";
        display: inline-block;
        height: 6px;
        width: 6px;
        border-width: 2px 2px 0 0;
        border-color: #C8C8CD;
        border-style: solid;
        transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        position: relative;
        top: -2px;
        position: absolute;
        top: 50%;
        margin-top: -4px;
        right: 5px;
      }
    }
  }
</style>
