<template>
  <transition name="fade">
  <div class="cartcontrol" >    
    <div class="close" @click="close">
          <i class="icon ion-ios-close-outline"></i>
    </div>
    <div class="content">
    <div class="product-wrapper">
      <div class="thumb">
        <img :src="product.icon" alt="">
      </div>
      <div class="product-info">
        <div class="title">
          {{product.name}}
        </div>
        <div class="price">
          ￥{{singlePrice}}
        </div>
      </div>
    </div>
    <div class="number-control">
      <span class="label">请选择数量</span>
      <div class="control">
        <control :product="product"></control>
      </div>
    </div>
    </div>
    <div class="footer">
      <div class="total-price">
        <span class="label">总计:</span>
        <span class="price">￥{{totalPrice}}</span>
      </div>
      <div class="sure">
        <button class="btn btn-block" @click="order">确定</button>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
  import control from './control'
  import {mapGetters} from 'vuex'
  export default {
    components: {
      control
    },
    computed: {
      totalPrice() {
        var price = this.product.group_price
        if (!this.isGroupBuy) {
          price = this.product.single_price
        }
        return this.quantity * price
      },
      singlePrice() {
        var price = this.product.group_price
        if (!this.isGroupBuy) {
          price = this.product.single_price
        }
        return price
      },
      ...mapGetters({
        product: 'product',
        quantity: 'quantity',
        isGroupBuy: 'isGroupBuy'
      })
    },
    methods: {
      close() {
        this.$emit('hideControl')
      },
      order() {
        this.$router.push({name: 'new_order'})
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .cartcontrol {
    position: absolute;
    z-index: 3000;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
    color: #000;
    font-size: 16px;
    &.fold-enter-active,&.fold-leave {
      transition: all 0.5s;
    }
    &.fold-leave-active,&.fold-enter {
      transition: all 0.5s;
      transform: translate3d(0, 0, 0);
    }
    .product-wrapper {
      padding: 0px 15px;
      display: flex;
      .thumb {
        width: 70px;
        height: 70px;
        position: relative;
        img {
          border: 1.5px solid #fff;
          position: absolute;
          top: -15px;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
      }
      .product-info {
        margin-left: 15px;
        text-align: left;
        margin-top: 5px;
        color: #000;
        font-size: 18px;
        .title {
        }
        .price {
          color: rgb(222,62,67);
        }
      }
    }
    .close {
       float: right;
       margin-right: 5px; 
       font-size: 22px;
       color: #aeaeae;
    }
    .number-control {
      margin-top: 10px;
      display: flex;
      width: 100%;
      padding: 0 10px;
      margin-bottom: 100px;
      .label {
        flex: 0 0 80px;
      }
      .control {
        flex: 1;
      }
    }
    .total-price {
      border-top: 1px solid #c0bfc4;
      padding-top: 5px;
      color: #000;
      text-align: right;
      padding-right: 10px;
      font-size: 18px;
      .price {
        color: rgb(222,62,67);
      }
    }
    .sure {
      margin-top: 5px;
      .btn {
        width: 100%;
        font-size: 18px;
        padding: 10px;
        background: #E84850;
        color: #fff;
        border: none;
      }
    }
  }
</style>
