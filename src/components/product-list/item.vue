<template>
  <li class="product-item">
    <div class="thumb">
      <img :src="product.icon" alt="">  
    </div>
    <div class="title">
      <div class="name">{{product.name}}</div>
      <div class="description">{{product.description}}</div>
      <span class="price">
        ￥{{product.group_price}}
        <span class="group_no">{{product.group_no}}人团</span>
      </span>
    </div>
  </li>  
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
  .product-item {
    display: flex;
    padding: 10px 10px;
    border-bottom: 1px solid #EDEDED;
    .thumb {
      flex: 0 0 120px;
      img {
        height: 120px;
        width: 120px;
      }
    }
    .title {
      flex: 1;
      text-align: left;
      padding-left: 20px;
      .name {
        padding-top: 5px;
        color: #000;
        font-size: 16px;
      }
      .description {
        color: rgb(147, 153, 159);
        font-size: 10px;
      }
      .price {
        margin-top: 10px;
        font-size: 16px;
        color: rgb(222,62,67);
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
    }
  }
</style>
