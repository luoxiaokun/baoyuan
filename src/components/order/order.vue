<template>
  <div>
 <v-title :title="'确认订单'"></v-title> 
  <div class="order">
    <div class="order-wrapper">
       <address-label></address-label>
      <div class="product-info" v-if="product != null">
        <div class="thumb">
          <img :src="product.icon" alt="">
        </div>
        <div class="info">
          <h5 class="title">{{product.name}}</h5>
          <div class="other">
            <span class="single-price">￥{{singlePrice}}</span>
            <div class="control">
              <control :product.sync="product" v-if="product != null"></control> 
            </div>
          </div>
        </div>
      </div>
      <div class="order-info" v-if="product != null">
        <span class="span">总价:
        <span class="price">￥{{totalPrice}}</span>        
        (包邮)
        </span>
      </div>
    </div>
    <div class="pay-info">
      <div class="label">请选择支付方式</div>
      <div class="pay-type">
      <div class="logo">
        <img src="./wx_pay.png" alt="">
      </div>
      <span class="pay_info">微信支付</span>
      </div>
    </div>
    <div class="pay-btn" v-if="product != null">
        <div class="btn btn-pay">立即支付</div>
    </div>
    <introduce></introduce>

  </div>

  </div>
</template>

<script>
  import title from 'components/title/title'
  import control from 'components/product/control'
  import introduce from './introduce'
  import addressLabel from './address_label'
  import {mapGetters} from 'vuex'
  export default {
    components: {
      control,
      'v-title': title,
      introduce: introduce,
      addressLabel: addressLabel
    },
    computed: {
      singlePrice() {
        if (!this.isGroupBuy) {
          return this.product.single_price
        } else {
          return this.product.group_price
        }
      },
      totalPrice() {
        if (!this.isGroupBuy) {
          return this.product.single_price * this.quantity
        } else {
          return this.product.group_price * this.quantity
        }
      },
      ...mapGetters({
        quantity: 'quantity',
        product: 'product',
        isGroupBuy: 'isGroupBuy'
      })
    },
    created() {
      console.log(this.product)
    }
  }
</script>

<style lang="stylus" scoped>
  .order {
    position: absolute;
    top: 44px;
    padding-top: 10px;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    height: 100%;
    background: #EBEBEB;
    color: #000;
  }
  .product-info {
    display: flex;
    background: #fff;
    padding: 5px;
    margin-top: 10px;
    .thumb {
      flex: 0 0 100px;
      width: 100px;
      height: 100px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .info {
      flex: 1;
      color: #000;
      text-align: left;
      margin-left: 10px;
      font-size: 18px;
      display: flex;
      flex-direction: column;
      .title {
        flex: 1;
      }
      .other {
        margin-top: 20px;
        display: flex;
        flex: 1;
        align-items: flex-end;
      }
      .single-price {
        color: rgb(222,62,67);
        flex: 0 0 30px;
        font-size: 20px;
      }
      .control {
        text-align: center;
        flex: 1;
      }
    }
  }
  .order-info {
    text-align: right;
    padding: 5px 15px;
    .price {
      color: rgb(222,62,67);
      font-size: 20px;
    }
  }
  .pay-info {
    background: #fff;
    text-align: left;
    .label {
      padding: 5px 15px;
      color: #999999;
      border-bottom: 1px solid #E5E5E5;
      font-size: 14px;
    }
    .pay-type {
      padding: 15px 15px;
      font-size: 18px;
      color: #000;
      position: relative;
      font-size: 0px;
      .logo {
        display: inline-block;
        vertical-align: top;
        img {
          width: 25px;
          height: 25px;
        }
      }
      .pay_info {
        line-height: 25px;
        font-size: 18px;
        padding-left: 5px;
      }
    }
  }
  
  .pay-btn {
    padding: 10px;
    .btn-pay {
      color: #fff;
      background: #E84850;
      padding: 10px;
      font-size: 18px;
      border-radius: 5px;
    }
  }
</style>
