<template>
  <div class="product-grids">
    <item v-for="product in products" :key="product.id" :data="product" :product="product"></item>  
  </div>
</template>

<script>
  import item from './item'
  export default {
    props: {
      products: {
        type: Array
      }
    },
    components: {
      item
    }
  }
</script>

<style lang="stylus" scoped>
  // ul {
  //   padding: 10px;
  //   border-top: 1px solid #EDEDED;
  // }
    .product-grids {
    background: #fff;
    position: relative;
    &:after {
      clear: both;      
    }
  }
</style>
