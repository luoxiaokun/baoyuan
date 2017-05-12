<template>
  <div class="profile">
  <div class="bg blur" :style="{backgroundImage: 'url(' + currentUser.avatar + ')'}"></div>
    <div class="user-header">
      <div class="avatar">
        <img :src="currentUser.avatar" alt="">
        <div class="name">{{currentUser.user_name}}</div>
      </div>
    </div>
      <div class="tabInfo">
        <tabinfo :type=type @changetype="change"></tabinfo>
      </div>
    <div class="user-orders">
      <!-- <div class="order-title">
        <h5 class="title">
          <i class="icon ion-clipboard"></i>
          我的订单
        </h5>
        <router-link class="all-orders" :to="{name: 'recommend'}">查看所有订单</router-link>
      </div> -->
      <div class="tabbars" v-show="type === 0">
        <tabbar :label="'待付款'" :icon="_iconUrl('./obligation.png')" :url="{name: 'orderType', params: {orderType: 1}}"></tabbar>
        <tabbar :label="'待发货'" :icon="_iconUrl('./shipments.png')" :url="{name: 'orderType', params: {orderType: 2}}" :number="2"></tabbar>
        <tabbar :label="'待收货'" :icon="_iconUrl('./receiving.png')" :url="{name: 'orderType', params: {orderType: 3}}"></tabbar>
        <tabbar :label="'待评价'" :icon="_iconUrl('./evaluate.png')" :url="{name: 'orderType', params: {orderType: 4}}"></tabbar>
      </div>
      <div class="tabbars" v-show="type === 1">
        <tabbar :label="'待成团'" :icon="_iconUrl('./12@2x.png')" :url="{name: 'groupStatus', params: {groupType: 0}}"></tabbar>
        <tabbar :label="'已成团'" :icon="_iconUrl('./13@2x.png')" :url="{name: 'groupStatus', params: {groupType: 0}}" :number="2"></tabbar>
        <tabbar :label="'拼团失败'" :icon="_iconUrl('./14@2x.png')" :url="{name: 'groupStatus', params: {groupType: 0}}"></tabbar>
      </div>
    </div>
    <div class="actions">  
      <ul class="list-items">
        <user-action-item :icon="_iconUrl('./15@2x.png')"  :message="'全部订单'" :url="{name: 'orderType', params: {orderType: 0}}"></user-action-item>
        <user-action-item :icon="_iconUrl('./16@2x.png')" :message="'我的收藏'" :url="{name: 'collectes'}"></user-action-item>
        <user-action-item :icon="_iconUrl('./17@2x.png')"  :message="'地址管理'" :url="{name: 'addresses'}"></user-action-item>
        <user-action-item :icon="_iconUrl('./18@2x.png')"  :message="'常见问题'" :url="{name: 'addresses'}"></user-action-item>
        <user-action-item :icon="_iconUrl('./19@2x.png')"  :message="'在线客服'" :url="{name: 'addresses'}"></user-action-item>
      </ul>
    </div>
  </div>
</template>

<script>
  import tabbar from './tabbar'
  import tabinfo from './tabInfo'
  import userActionItem from './user_action_item'
  import {mapGetters} from 'vuex'
  export default {
    components: {
      tabbar,
      tabinfo,
      userActionItem
    },
    data () {
      return {
        type: 0
      }
    },
    computed: {
      ...mapGetters({
        'currentUser': 'currentUser'
      })
    },
    methods: {
      _iconUrl(url) {
        return require(`${url}`)
      },
      change (num) {
        this.type = num
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .bg{
    background-size: cover;
    padding-top:12rem;
    -webkit-filter: blur(10px);
       -moz-filter: blur(10px);
        -ms-filter: blur(10px);    
            filter: blur(5px);
  }
  .user-header {
    // background: url('http://omhf8n8jd.bkt.clouddn.com/bj.png');
    // background-size: cover;
    // min-height: 200px;
    // padding: 0 20px;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // position:absolute;
    margin-top: -10rem;
    padding-bottom:3rem;
    // margin-left:auto;
    -webkit-filter: blur(0px);
       -moz-filter: blur(0px);
        -ms-filter: blur(0px);    
            filter: blur(0px); 
    .avatar {
      flex: 1;
      text-align: center;
      padding-top: 15px;
      img {
        width: 65px;
        height: 65px;
        border-radius: 65px;
        border: 1px solid #fff;
      }
      .name {
        color: #fff;
        font-size: 18px;
      }
    }
  }
  .profile {
    position: absolute;
    top: 0px;
    bottom: 61px;
    width: 100%;
    overflow-x: hidden; 
    overflow-y: auto;
    background: #EBEBEB;
    color: #000;
  }
  .user-orders {
    background: #fff;
    .order-title {
      display: flex;
      padding: 10px 5px;
      border-bottom 1px solid #D9D9D9;
      .title {
        flex: 1;
        text-align: left;
        i {
          font-size: 16px;
        }
      }
      .all-orders {
        float:right;
        color: #999;
        position: relative;
        padding-right: 10px;
        &:after {
          content: " ";
          display: inline-block;
          height: 6px;
          width: 6px;
          border-width: 2px 2px 0 0;
          border-color: #C8C8CD;
          border-style: solid;
          transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
          position: relative;
          top: -2px;
          position: absolute;
          top: 50%;
          margin-top: -4px;
          right: 2px;
        }
      }
    }
  }
  .tabbars{
    display: flex;
  }
  .tabInfo{
    background-color:white;
    margin-bottom:.5rem;
  }
  .list-items {
    background: #fff;
    margin-top: 10px;
  }  
</style>
