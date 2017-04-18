<template>
  <div class="product-group">
    <product-grid :products="products"></product-grid>
    <loading v-if="isLoading"></loading>
  </div>
</template>

<script>
  import productGrid from 'components/product-grid/grid'
  import loading from 'components/loading/loading'
  import service from 'service/product_service'
  export default {
    components: {
      productGrid,
      loading
    },
    data() {
      return {
        products: [],
        isLoading: true
      }
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm._getProducts(to.params.categoryId)
      })
    },
    beforeRouteUpdate(to, from, next) {
      this._getProducts(to.params.categoryId)
      next()
    },
    methods: {
      _getProducts(categoryId) {
        service.getProductsByType(categoryId).then((response) => {
          this.products = response
          this.isLoading = false
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .product-group {
    position: relative;    
    width: 100%;
  }
</style>
