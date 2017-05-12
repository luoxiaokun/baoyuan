<template>
  <router-link class="tabbar-item" :to="url">
    <span class="badge">
      <img :src=icon alt="" class="icon" width="100%" style="width:2rem">
      <span class="weui-badge" style="position: absolute;top: -15px;right: -10px;" v-if="number > 0">
         {{number}}
      </span>
    </span>
    <p>{{label}}</p>
  </router-link>
</template>

<script>
  export default {
    props: {
      label: {
        type: String
      },
      url: {
        type: Object
      },
      icon: {
        type: String
      },
      number: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .tabbar-item {
    flex: 1;
    color: #000;
    padding-top: 10px;
    padding-bottom: 10px;
    .badge {
      position: relative;
    }
    i {
      color: #999;
      font-size: 30px;
    }
  }
</style>
