<template>
  <router-link class="sub-type-grid" :to="{name: 'sub_categories', params: {categoryId: type.id}}">
    <div class="thumb">
      <img :src="type.icon" alt="">
    </div>
    <h5 class="title">{{type.name}}</h5>
  </router-link>
</template>

<script>
  export default {
    props: {
      type: {
        type: Object
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .sub-type-grid {
    position: relative;
    float: left;
    width: 33.33333%;
    box-sizing: border-box;
    text-align: center;
    .thumb {
      width: 100%;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100px;
      }
    }
    .title {
      margin-top: 10px;
      font-size: 14px;
      color: #000;
      text-align: center;
    }
  }
</style>
