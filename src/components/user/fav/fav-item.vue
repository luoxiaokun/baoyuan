<template>
  <li>
    <div class="item-content">
      <div class="item-image">
          <img :src=item.icon alt="" class="" width="100%" style="">
      </div>
      <div class="item-font">
      <div class="item-product-name">
        <span class="">{{item.name}}</span><br>
        <span class="description">{{item.description}}</span>
      </div>
      <div class="item-product-price">
        <span class="">￥ {{item.single_price}}</span>
      </div>
      </div>
    </div>
  </li>
</template>
<script>
  export default{
    props: {
      item: {
        type: Object
      }
    }
  }
</script>
<style lang="stylus" scoped>
    li {
      background-color:white;
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
    background-color:white;
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
            border-bottom:1px solid #E6E6E6;
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
            }
            .description{
              font-size:.8rem;
              color:#FF8000;
            }
        }
    }
</style>
