<template>
   <div class="weui-tabbar">
    <div class="button-group">
      <router-link to="/welcome/recommend" replace class="tabbar-item">
         <i class="weui-tabbar__icon ion-ios-home-outline icon"></i>
        <p class="weui-tabbar__label">首页</p>
      </router-link>
      <div class="tabbar-item" @click="fav" :class="{'active' : product.is_fav}">
        <i class="weui-tabbar__icon  icon" :class="[product.is_fav? 'ion-ios-heart' :'ion-ios-heart-outline']"></i>
        <p class="weui-tabbar__label">{{favStr}}</p>
      </div>
    </div>
    <div class="button-group">
       <div class="btn-buy btn-group-buy tabbar-item" @click="_groupBuy()">
         <p class="price">￥{{product.group_price}}</p>
         <p class="label">{{product.group_no}}人包圆儿</p>
       </div>
    </div>
    <div class="button-group">
       <div class="btn-buy btn-single-buy tabbar-item" @click="_singleBuy()">
          <p class="price">￥{{product.single_price}}</p>
         <p class="label">我要包圆儿</p>
       </div>
    </div>
   </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import service from 'service/product_service'
  export default {
    methods: {
      fav() {
        this.product.is_fav = !this.product.is_fav
        service.favProduct(this.product.id)
      },
      _singleBuy() {
        this.$store.dispatch('singleBuy')
        this._showCart()
      },
      _groupBuy() {
        this.$store.dispatch('groupBuy')
        this._showCart()
      },
      _showCart() {
        this.$emit('showControl')
        this.$store.dispatch('resetQuantity')
      }
    },
    computed: {
      ...mapGetters({
        product: 'product'
      }),
      favStr() {
        if (this.product.is_fav) {
          return '已收藏'
        } else {
          return '收藏'
        }
      }
    }
  }

</script>

<style lang="stylus" scoped>
  .weui-tabbar {
    z-index: 3000;
  }
  .button-group {
    flex: 1;
    display: flex;
    i {
      margin-bottom: 0px;
    }
    .tabbar-item {
      flex: 1;
      padding-top: 10px;
      &.active {
        color: rgb(222,62,67);
      }
    }
    .tabbar-item:nth-child(1) {
      border-right: 1px solid #c0bfc4;
    }
  }
  .weui-tabbar__icon {
      margin-bottom: 0.5rem;
    }
  .btn-buy {
    color: #fff;
  }
  .btn-group-buy {
    background: #f78f93;
  }  
  .btn-single-buy {
    background: #de3e43;
  }
  .active {
    .weui-tabbar__icon,.weui-tabbar__label {
      color: rgb(222,62,67);
    }
  }
</style>
