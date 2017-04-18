<template>
  <div class="product-group">
    <h5 class="title" v-if="!isSearching">{{searchLabel}}</h5>
    <loading-more v-if="isSearching" :label="searchLabel"></loading-more>
    <product-grid :products="products" v-if="products.length > 0 && !isSearching"></product-grid>    
    <no-more-data v-if="products.length == 0 && !isSearching" :label="noMoreData"></no-more-data>
  </div>
</template>

<script>
  import productGrid from 'components/product-grid/grid'
  import loadingMore from 'components/loading/loading_more'
  import noMoreData from 'components/loading/no_more_data'
  import service from 'service/product_service'
  import eventBus from '@/event_bus'
  export default {
    components: {
      productGrid,
      loadingMore,
      noMoreData
    },
    data() {
      return {
        products: [],
        isSearching: true,
        searchStr: null
      }
    },
    created() {
      eventBus.$on('searchProduct', (searchStr) => {
        if (searchStr === this.searchStr) {
          return
        }
        this._searchProducts(searchStr)
      })
    },
    computed: {
      searchLabel() {
        if (this.isSearching) {
          return `正在搜索'${this.searchStr}'`
        } else {
          return `搜索'${this.searchStr}'的结果为:`
        }
      },
      noMoreData() {
        return `暂无'${this.searchStr}'相关商品`
      }
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm._searchProducts(to.params.searchStr)
      })
    },
    methods: {
      _searchProducts(searchStr) {
        this.searchStr = searchStr
        service.searchProducts(searchStr).then((response) => {
          this.products = response
          this.isSearching = false
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .product-group {
    position: relative;    
    width: 100%;
    border-top: 1px solid #e5e5e5;
    .title {
      text-align: left;
      margin-top: 5px;
      padding-left: 15px;
    }
  }
</style>
