<template>
  <li class="member">
    <div class="avatar">
      <img :src="member.avatar" alt="">
    </div>
    <div class="user-info">
      <div class="title">
        {{member.name}}
        <span class="label" v-if="member.is_owner">团长</span>
      </div>
      <div class="join">
        <span class="time">{{member.joined_at}}</span>
        <span class="str">{{joinInfo}}</span>
      </div>
    </div>
  </li>
</template>

<script>
  export default {
    props: {
      member: {
        type: Object
      }
    },
    computed: {
      joinInfo() {
        if (this.member.is_owner) {
          return '开团'
        } else {
          return '拼团'
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../../commons/css/mixin.styl"
  .member {
    border-top: 1px solid #f0f0f0;
    padding: 10px 10px;
    display: flex;
    .avatar {
      flex: 0 0 50px;
      img {
        width: 50px;
        height: 50px;
      }
    }
    .user-info {
      flex: 1;
      padding-left: 20px;
      text-align: left;
      .title {
        font-size: 14px;
        color: #000;
        .label {
          font-size: 10px;
          padding-top: 1px;
          padding-bottom: 1px;
          padding-right: 4px;
          padding-left: 7px;
          color: rgb(222,62,67);
          bg-image('red');
          background-size: 100% 100%;
        }
      }
      .join {
        color: #999;
        font-size: 12px;
      }
    }
  }
</style>
