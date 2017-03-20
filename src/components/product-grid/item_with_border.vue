<template>
  <router-link class="product-grid" :to="{name: 'product', params: {productId: product.id}}">
    <div class="thumb">
      <img :src="product.icon" alt="">
    </div>
    <h5 class="title">{{product.name}}</h5>
    <span class="price">
      ￥{{product.group_price}}
      <span class="group_no">{{product.group_no}}人团</span>
    </span>
  </router-link>
</template>

<script>
  export default {
    props: {
      product: {
        type: Object
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../commons/css/mixin.styl"
  .product-grid {
    position: relative;
    padding: 20px 10px;
    width: 50%;
    box-sizing: border-box;
    display: inline-block;
    border-top: 1px solid #EDEDED;
    border-right: 1px solid #EDEDED;
    .thumb {
      width: 150px;
      height: 150px;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .title {
      margin-top: 5px;
      maring-bottom: 5px;
      font-size: 16px;
      color: #000;
      text-align: center;
    }
    .price {
      font-size: 16px;
      color: rgb(222,62,67);
      text-align: center;
    }
    .group_no {
      font-size: 12px;
      padding-top: 1px;
      padding-bottom: 1px;
      padding-right: 4px;
      padding-left: 7px;
      bg-image('red');
      background-size: 100% 100%;
    }
  }
</style>
