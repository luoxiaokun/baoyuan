<template>
  <div class="group-container">
    <div class="container-wrapper">
      
    </div>
    <h5 class="title">以下土豪正在发起包圆儿</h5>
    <item :group="group" v-for="group in groups" :key="group.id"></item>  
  </div>
</template>

<script>
  import item from './item'
  export default {
    props: {
      groups: {
        type: Array
      }
    },
    components: {
      item
    }
  }
</script>

<style lang="stylus" scoped>
  .group-container {
    margin-top: 5px;
    .container-wrapper {
      width: 100%;
      background: #fff;
    }
    .title {
      border-bottom: 1px solid #EDEDED;
      padding: 5px;
      font-size: 14px;
      color: #000;
    }
  }
</style>
