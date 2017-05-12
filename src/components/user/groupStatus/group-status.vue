<template>
  <div>
  <v-title :title="'我的团购'"></v-title>
    <div class="tabInfo">
        <tabinfo :type=type @changetype="change"></tabinfo>
      </div>
    <div class="order-main">
      <div class="">11</div>
    </div>
</div>
</template>
<script>
  import title from 'components/title/title'
  import tabinfo from './group-tabInfo'
  export default {
    components: {
      'v-title': title,
      tabinfo
    },
    data () {
      return {
        type: this.$route.params.groupType
      }
    },
    methods: {
      change (num) {
        this.type = num
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
