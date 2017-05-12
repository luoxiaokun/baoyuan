<template>
  <div>
    <div class="item-type">
      <div class="item-logo">
        <img src="./logo.png" alt="" class="" width="100%" style="width:2.5rem;">
        <span style="margin-left:3rem;">包圆儿商城&nbsp;&nbsp;&nbsp;<i class="ion-chevron-right"></i></span>
      </div>
      <div class="item-title-font">
        <div class="" v-if="type === 1">等待买家付款</div>
        <div class="" v-if="type === 2">等待卖家发货</div>
        <div class="" v-if="type === 3">等待买家收货</div>
        <div class="" v-if="type === 4">等待买家评价</div>
      </div>
    </div>
    <div class="item-content">
      <div class="item-image">
          <img :src=item.products.icon alt="" class="" width="100%" style="">
      </div>
      <div class="item-font">
      <div class="item-product-name">
        <span class="">{{item.products.name}}</span><br>
        <span class="description">{{item.products.description}}</span>
      </div>
      <div class="item-product-price">
        <div class="row">
        <div class="col-50"><span>￥ {{item.products.single_price}}</span></div>
        <div class="col-50 count"><span style="padding-right:1rem">X {{item.order_conut}}</span>
        </div>
       </div>
      </div>
      </div>
    </div>
        <div class="msg">
          <span class="sm-font">共计{{item.order_conut}}件商品，合计:¥<span class="bg-font">{{item.order_total}}</span>.00</span>
          </div>

          <div class="choice">
            <span class="cancel-order" v-if="type === 1">取消订单</span>
            &nbsp;&nbsp;&nbsp;
            <span class="pay-money" v-if="type === 1">立即付款</span>
            <span class="cancel-order" v-if="type === 2">提醒发货</span>
            <span class="cancel-order" v-if="type === 3">确认收货</span>
            <span class="cancel-order" v-if="type === 4">立即评价</span>
          </div>
   </div>
</template>
<script>
  export default {
    props: {
      item: {
        type: Object
      },
      type: {
        type: Number
      }
    }
  }
</script>
<style lang="stylus" scoped>
    .item-type{
      background-color:white;
      padding:1rem;
      border-bottom:1px solid #E6E6E6;
      .item-logo{
        width:73%;
        float:left;
        font-size:.8rem;
        img{
          position:absolute;
          margin-top:-.5rem;
        }
      }
      .item-title-font{
        text-align:right;
        font-size:.8rem;
        color:#FF6666;
      }
    }
    .item-content {
    box-sizing: border-box;
    // padding-left: 0.75rem;
    min-height: 2.2rem;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    background-color:hsla(0, 0%, 100%, 0.42);
    // margin-bottom:.5rem;
        .item-image {
          width:7rem;
          padding-left:.75rem;
         display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-shrink: 0;
        -ms-flex: 0 0 auto;
        -webkit-flex-shrink: 0;
        flex-shrink: 0;
        -webkit-box-lines: single;
        -moz-box-lines: single;
        -webkit-flex-wrap: nowrap;
        flex-wrap: nowrap;
        box-sizing: border-box;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        }
        .item-font{
            width:100%;
            // border-bottom:1px solid #E6E6E6;
            margin-left:.75rem;
            display: block;
            padding-top: 0.5rem;
            padding-bottom: 0.45rem;
            align-self: stretch;
            .item-product-name{
              height:5rem;
            }
            .item-product-price{
              margin-top:.1rem;
              color:#FF6666;
              .row > [class*="col-"]{
                float:left;
               }
               .col-50{
                width:50%;
               }
               .count{
                text-align:right;
                // padding-right:.5rem;
               }
            }
            .description{
              font-size:.8rem;
              color:#FF8000;
            }
        }
    }
      .msg{
        padding:.3rem 0;
        text-align:right;
        padding-right:1rem;
        background-color:white;
        border-bottom:1px solid #E6E6E6;
          }
      .sm-font{
        font-size:.7rem;
      }
      .bg-font{
        font-size:1rem;
      }
      .ordertype{
        color:#FF6666;
      }
      .choice{
        background-color:white;
        padding:.5rem .5rem;
        text-align:right;
        font-size:.7rem;
      }
      .cancel-order{
        border:1px solid #E6E6E6;
        padding:.25rem .4rem;
      }
      .pay-money{
        border:1px solid #FF6666;
        color:#FF6666;
        padding:.25rem .4rem;
      }
</style>
