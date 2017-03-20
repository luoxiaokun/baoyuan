<template>
  <div class="profile">
    <div class="user-header">
      <div class="avatar">
        <img src="./header.jpeg" alt="">
        <div class="name">田胖子</div>
      </div>
    </div>
    <div class="user-orders">
      <div class="order-title">
        <h5 class="title">
          <i class="icon ion-clipboard"></i>
          我的订单
        </h5>
        <router-link class="all-orders" :to="{name: 'recommend'}">查看所有订单</router-link>
      </div>
      <div class="tabbars">
        <tabbar :label="'团购'" :icon="'ion-ios-people'" :url="{name: 'recommend'}"></tabbar>
        <tabbar :label="'待发货'" :icon="'ion-ios-box-outline'" :url="{name: 'recommend'}" :number="2"></tabbar>
        <tabbar :label="'待收货'" :icon="'ion-paper-airplane'" :url="{name: 'recommend'}"></tabbar>
        <tabbar :label="'退款/售后'" :icon="'ion-social-usd-outline'" :url="{name: 'recommend'}"></tabbar>
      </div>
    </div>
    <div class="actions">  
      <ul class="list-items">
        <user-action-item icon="ion-ios-star-outline" :message="'我的收藏'" :url="{name: 'user_fav'}"></user-action-item>
        <user-action-item icon="ion-ios-location-outline" :message="'地址管理'" :url="{name: 'addresses'}"></user-action-item>
        <user-action-item icon="ion-chatbox-working" :message="'联系俺们'" :url="{name: 'addresses'}"></user-action-item>
      </ul>
    </div>
  </div>
</template>

<script>
  import tabbar from './tabbar'
  import userActionItem from './user_action_item'
  export default {
    components: {
      tabbar,
      userActionItem
    }
  }
</script>

<style lang="stylus" scoped>
  .user-header {
    background: url('http://omhf8n8jd.bkt.clouddn.com/bj.png');
    background-size: cover;
    min-height: 200px;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
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
  .tabbars {
    display: flex;
  }
  .list-items {
    background: #fff;
    margin-top: 20px;
  }  
</style>
