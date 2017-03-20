<template>
  <transition name="move">
  <div class="page ">
  <v-title :title="currentProductType.name"></v-title>
  <div class="container">
  <div class="tab">      
    <div class="tab-item" v-for="category in currentProductType.sub_product_types">
      <router-link :to="{name: 'sub_categories', params: {categoryId: category.id}}" replace>{{category.name}}</router-link> 
    </div>
  </div>
  <loading-more v-if="isLoading" label="正在加载商品"></loading-more>
  <div class="content" ref="productsScroll">
   <split></split>
       <div class="description" v-if="currentSubCategory != null && currentSubCategory.description != null">
         <h5>{{currentSubCategory.description}}</h5>
       </div>
      <grid v-if="currentSubCategory != null" :products="currentSubCategory.products"></grid>
    </div>
    <no-more-data label="该类别暂无商品" v-if="!isLoading && currentSubCategory.products.length == 0"></no-more-data>
  </div>
 
  </div>
  </transition>
</template>

<script>
  import {mapGetters} from 'vuex'
  import split from 'components/split/split'
  import title from 'components/title/title'
  import loadingMore from 'components/loading/loading_more'
  import noMoreData from 'components/loading/no_more_data'
  import grid from 'components/product-grid/grid_with_border'
  import BScroll from 'better-scroll'
  import service from 'service/product_service'
  export default {
    computed: {
      ...mapGetters({
        currentProductType: 'currentProductType'
      })
    },
    data() {
      return {
        currentSubCategory: null,
        isLoading: true
      }
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.getProductsByCategory(to.params.categoryId)
      })
    },
    beforeRouteUpdate(to, from, next) {
      this.isLoading = true
      this.getProductsByCategory(to.params.categoryId)
      next()
    },
    components: {
      split,
      loadingMore,
      noMoreData,
      grid,
      'v-title': title
    },
    methods: {
      getProductsByCategory(typeId) {
        service.getProductsByType(typeId).then((response) => {
          this.currentSubCategory = response
          this.isLoading = false
          this.$nextTick(() => {
            this._initProductsScroll()
          })
        })
      },
      _initProductsScroll() {
        if (this.productsScroll == null) {
          this.productsScroll = new BScroll(this.$refs.productsScroll, {
            click: true,
            scrollY: true
          })
        } else {
          this.productsScroll.refresh()
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../../commons/css/mixin.styl"
  .move-enter-active,&.move-leave{
    transition: all 0.2s linear;
    transform: translate3d(0,0,0);
  }
  .move-enter,&.move-leave-active {
    transition: all 0.2s linear;
    transform: translate3d(100%,0,0);      
  }
  .animated {
    animation-duration: 1s;
  }
  .container {
    position: absolute;
    top: 44px;
    left: 0;
    overflow: hidden;
    width: 100%;
    bottom: 66px;
    .content {
      position: fixed;
      top: 84px;
      left: 0;
      bottom: 66px;
      width: 100%;
      overflow: auto;
    }   
  }
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: .8rem;
        color: black;
        &.active
          color: #de3e43;
          border-1px(#de3e43, 2px);
  .product-list {
     border-top: 1px solid #EDEDED;
  }        
  .description {
    margin: 15px 0;
    font-size: 16px;
    color: #000;
  }
</style>
