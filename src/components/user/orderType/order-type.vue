<template>
  <div>
  <v-title :title="'我的订单'"></v-title>
    <div class="tabInfo">
        <tabinfo :type=type @changetype="change"></tabinfo>
      </div>
    <div class="order-main">
        <item v-for="item in items" :item="item" :key="item.order_id" :type=type></item>
    </div>
</div>
</template>
<script>
  import title from 'components/title/title'
  import tabinfo from './order-tabInfo'
  import item from './order-item'
  import orderService from 'service/order_service'
  export default {
    components: {
      'v-title': title,
      tabinfo,
      item
    },
    data () {
      return {
        type: this.$route.params.orderType,
        items: []
      }
    },
    created () {
      orderService.index(this.type).then((response) => {
        this.items = response
      })
    },
    methods: {
      change (num) {
        this.type = num
        orderService.index(this.type).then((response) => {
          this.items = response
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .tabInfo{
    position: absolute;
    right: 0;
    left: 0;
    top:44px;
    z-index: 10;
    height: 44px;
    padding: 0px 10px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: #fff;
    border-top:1px solid #E6E6E6;
    border-bottom:1px solid #E6E6E6;
  }
  .order-main {
    position: absolute;
    top: 88px;
    bottom: 0;
    width: 100%;
    left:0;
    right:0;
    overflow: auto;
    background: #ebebeb;
    color: #000;
    text-align:left;
   }
  
</style>
