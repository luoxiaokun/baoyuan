<template>
<div ref="contentWrapper" class="recommend-wrapper">
  <carousel :banners="banners"></carousel>
  <div class="top-products" v-if="topProducts.length == 3">
    <div class="product-wrapper">
      <div class="product-first product-group">
        <div class="title">
           <h5 class="product-title">{{topProducts[0].name}}</h5>
          <p class="product-description">
           {{topProducts[0].description}}
          </p>
        </div>
        <div class="product-thumb">
          <img :src="topProducts[0].icon" alt="">
        </div>
      </div>
      <div class="product-second product-group">
        <div class="product-item">
          <div class="title">
              <h5 class="product-title">{{topProducts[1].name}}</h5>
              <p class="product-description">{{topProducts[1].description}}</p>
          </div>
          <div class="product-thumb">
            <img :src="topProducts[1].icon" alt="">
        </div>
        </div>
        <div class="product-item">
          <div class="title">
              <h5 class="product-title">{{topProducts[2].name}}</h5>
              <p class="product-description">{{topProducts[2].description}}</p>
          </div>
          <div class="product-thumb">
            <img :src="topProducts[2].icon"  alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
  <split></split> 
  <div class="product-grop-wrapper" v-if="newProducts.length > 0">
    <title-label :title="'新品首发'"></title-label>  
    <product-grid :products="newProducts"></product-grid> 
  </div>
  <div class="clear"></div>
  <split></split> 
  <div class="product-group-wrapper" v-if="hotProducts.length > 0">
    <title-label :title="'人气产品'"></title-label>  
    <product-list :products="hotProducts"></product-list> 
  </div>
  <loading v-if="isLoading"></loading>
</div>  
</template>

<script>
  import carousel from 'components/welcome/recommend/carousel/carousel'
  import split from 'components/split/split'
  import loading from 'components/loading/loading'
  import titleLabel from 'components/title-label/title_label'
  import productGrid from 'components/product-grid/grid'
  import productList from 'components/product-list/list'
  import service from 'service/welcome_service'
  import BScroll from 'better-scroll'
  export default {
    components: {
      carousel,
      split,
      loading,
      titleLabel,
      productGrid,
      productList
    },
    data() {
      return {
        banners: [],
        topProducts: [],
        newProducts: [],
        hotProducts: [],
        isLoading: true
      }
    },
    created() {
      // this._initContent()
      service.welcome().then((response) => {
        this.banners = response.banners
        this.topProducts = response.top_products
        this.newProducts = response.new_products
        this.hotProducts = response.hot_products
        this.isLoading = false
      })
    },
    methods: {
      _initContent() {
        this.$nextTick(() => {
          this.contentScroll = new BScroll(this.$refs.contentWrapper, {
            click: true,
            scrollY: true,
            probeType: 3
          })
          console.log(this.$refs.contentWrapper.clientHeight)
          this.contentScroll.on('scroll', (item) => {
            // console.log(this.$refs.contentWrapper.clientHeight)
          })
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../../commons/css/mixin.styl"
  .recommend-wrapper {
    position: relative;
    // height: 100%;
    // overflow: hidden;
  }
  ::-webkit-scrollbar {
    display: none;
      }
  .product-description {
    color: rgb(147, 153, 159);
    font-size: 10px;
  }
  .product-title {
    font-size: 16px;
    font-weight: 600;
    color: #000;
  }
  .product-wrapper {
    display: flex;
    background: #fff;
    text-align: left;
    height: 275px;
    .product-group {
      padding-bottom: 5px;
      padding-top: 17px;
      height: 253px;
    }
    .product-first {
      flex: 1;
      padding-left: 10px;  
      padding-right: 5px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      &:after {
        display: block;
        position: absolute;
        right: 0;
        bottom: 0;
        height: 100%;
        border-right: 1px solid #e6e6e6;
        content: ' ';
      }  
      .title {
        height: 70px;
        flex: 0 0 70px;
      }
      .product-description {
        width: 80%;
      }

      .product-thumb {
        flex: 0 0 213px;
        width: 100%;
        margin-top: 10px;
        text-align: center;
        vertical-align: bottom;
        img {
          height: 160px;
          max-width: 90%;
        }
      }   
    }
    .product-second {
      flex: 1;
      .product-item {
        height: 50%;
        display: flex;
        padding-left: 5px;  
        padding-right: 10px;
        
        .title {
          flex: 1;
          padding-right: 5px;
          text-align: top;
        }
        .product-description {
          font-size: 0.5rem;
        }
        .product-thumb {
          flex: 1;
          text-align: center;
          img {
           width: 100%;
           vertical-align: middle;
          }
        } 
      }
      .product-item:nth-child(2) {
        padding-top: 20px;
        position: relative;
         &:after {
          display: block;
          position: absolute;
          left: 0;
          top: 0px;
          width: 100%;
          z-index: 1000;
          border-top: 1px solid #e6e6e6;
          content: ' ';
        } 
      }
    }
  }
</style>
