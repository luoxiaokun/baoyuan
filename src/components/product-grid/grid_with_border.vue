<template>
  <div class="product-grids">
    <item v-for="product in products" :product="product" :key="product.id" :data="product"></item>
  </div>
</template>

<script>
  import item from './item_with_border'
  import eventBus from '@/event_bus'
  export default {
    props: {
      products: {
        type: Array
      }
    },
    components: {
      item
    },
    created() {
      eventBus.$emit('products')
    }

  }
</script>

<style lang="stylus" scoped>
  .product-grids {
    background: #fff;
    position: relative;
    border-bottom: 1px solid #EDEDED;
    &:after {
      clear: both;      
    }
  }
</style>
