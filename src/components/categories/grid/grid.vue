<template>
  <div class="product-grids">
    <item v-for="type in this.currentProductType.sub_product_types" :type="type" :key="type.id" :data="type"></item>
  </div>
</template>

<script>
  import item from './item'
  import {mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        currentProductType: 'currentProductType'
      })
    },
    components: {
      item
    }
  }
</script>

<style lang="stylus" scoped>
  .product-grids {
    background: #fff;
    position: relative;
    padding: 10px 15px;
    &:after {
      clear: both;      
    }
  }
</style>
