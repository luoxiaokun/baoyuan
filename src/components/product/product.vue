<template>
  <transition name="slide">
  <div class="page">
    <v-title :title="'商品详情'"></v-title> 
    <div class="container">
      <banners :banners="product.thumbs" v-if="product != null"></banners>
      <div class="content" v-if="product != null">
         <div class="info">
         <h1 class="title">{{product.name}}</h1>
         <div class="price">
            <span class="group-price">￥{{product.group_price}} <span class="group_no">{{product.group_no}}人团</span> </span>
            <span class="single-price">￥{{product.single_price}}</span>            
         </div>
         <div class="label-info">
           <span class="delivery">快递包邮</span>
           <span class="sell-count">已售{{product.sell_count}}件</span>
         </div> 
         <div class="clear"></div>
         <delivery-label></delivery-label> 
         </div> 
         <split></split>
          <group :groups="product.groups" v-if="product.groups.length > 0"></group> 
         <div class="product-image">
           <div class="product-image-detail">
             <img :src="image.url" alt="" v-for="image in product.images">
           </div> 
         </div> 
      </div>
    </div> 
    <v-bottom  v-if="product != null" v-on:showControl="openControl"></v-bottom>
    <div>
      <cartcontrol v-if="product != null && showControl" v-on:hideControl="hideControl"></cartcontrol>
      <v-mark v-if="showControl" v-on:hideControl="hideControl"></v-mark>
    </div>
  </div>
  </transition>
</template>

<script>
  import {mapGetters} from 'vuex'
  import title from 'components/title/title'
  import loadingMore from 'components/loading/loading_more'
  import deliveryLabel from 'components/delivery-label/delivery_label'
  import cartcontrol from './cartcontrol'
  import mark from './mark'
  import bottom from './bottom'
  import banners from './banners'
  import group from './group/group'
  import split from 'components/split/split'
  import service from 'service/product_service'
  export default {
    components: {
      loadingMore,
      'v-title': title,
      'v-bottom': bottom,
      deliveryLabel,
      cartcontrol,
      'v-mark': mark,
      banners,
      group,
      split
    },
    computed: {
      ...mapGetters({
        product: 'product'
      })
    },
    data() {
      return {
        showControl: false
      }
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        service.getProduct(vm.$route.params.productId).then((response) => {
          vm._init(response)
        })
      })
    },
    methods: {
      _init(product) {
        this.$store.dispatch('resetCart')
        this.$store.dispatch('setProduct', product)
      },
      hideControl() {
        this.showControl = false
      },
      openControl() {
        this.showControl = true
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../commons/css/mixin.styl"
  .container {
    position: absolute;
    top: 44px;
    left: 0;
    overflow: auto;
    width: 100%;
    bottom: 66px;
    // .image-header {
    //     width: 100%;
    //     position: relative;
    //     img {
    //       top: 0;
    //       left: 0;
    //       width: 100%;
    //     }
    // }
    .content {
      margin-top: 5px;
      text-align: left;
      color: #000;
      .info {
        padding: 5px;
      }
      .title {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 5px;
      }
      .price {
        .group-price {
          color: rgb(222,62,67);
          font-size: 22px;
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
        .single-price { 
          color: rgb(147, 153, 159);
          text-decoration: line-through;
        } 
      }
      .label-info {
        color: rgb(147, 153, 159);
        font-size: 14px;
        .delivery {
          float: left;
        }
        .sell-count {
          float: right;
        }
      }
    }     
  }
  .product-image {
    background: #F7F7F7;
    padding: 15px 10px;
    .title {
      text-align: center;
    }
    .product-image-detail {
      width: 100%;
      position: relative;
      img {
        width: 100%;
      }
    }
    
  }
  .slide-enter-active,&.slide-leave{
    transition: all 0.2s linear;
    transform: translate3d(0,0,0);
  }
  .slide-enter,&.slide-leave-active {
    transition: all 0.2s linear;
    transform: translate3d(100%,0,0);      
  }
</style>
