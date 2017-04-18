<template>
  <div class="product-grids">
    <item :products="products"></item>
  </div>
</template>

<script>
  import item from './item'
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
    &:after {
      clear: both;      
    }
    
  }
</style>
