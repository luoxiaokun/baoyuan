<template>
  <li class="group-item">
    <div class="group-user">
      <div class="avatar">
        <img :src="group.create_user.avatar" alt="">
      </div>
      <div class="group-info">
        <div class="create_user"><span class="name">{{group.create_user.name}}</span>开团</div>
        <div class="remaining-time">
          剩余<span class="hour time">{{remainTime.hour}}</span>:
          <span class="minute time">{{remainTime.minute}}</span>:
          <span class="second time">{{remainTime.second}}</span> 结束,
          仅差{{group.short_no}}人
        </div>        
      </div>
      <div class="join">
        <div class="btn">包圆儿</div>
      </div>
    </div>
  </li>
</template>

<script>
  import {countdown} from 'commons/js/date_utils'
  export default {
    props: {
      group: {
        type: Object
      }
    },
    data() {
      return {
        remainTime: {
          day: 0,
          hour: 0,
          minute: 0,
          second: 0
        },
        interval: null
      }
    },
    created() {
      this._startCountdown()
    },
    destroyed() {
      if (this.interval != null) {
        clearInterval(this.interval)
      }
      console.log('destroyed')
    },
    methods: {
      _startCountdown() {
        this.interval = setInterval(countdown(this.group.ended_at, this.remainTime), 1000)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .group-item {
    border-bottom: 1px solid #EDEDED;
    padding: 10px;
    display: flex;
    .group-user {
      flex: 1;
      display: flex;
      align-items: center;
      .avatar {
        flex: 0 0 50px;
        width: 50px;
        height: 50px;
        img {
          width: 50px;
          height: 50px;
          border-radius: 50px;
        }
      }
      .group-info {
        flex: 1;
        padding-left: 5px;
        font-size: 11px;
        .create_user {
          color: #999;
          .name {
            color: #000;
          }
        }
        .remaining-time {
          color: #999;
          .time {
            color: rgb(222,62,67);
          }
        }
      }
    }
    .join {
      float: right;
      padding-right: 10px;
      .btn {
        border: 1px solid rgb(222,62,67);
        color: rgb(222,62,67);
        font-size: 11px;
        border-radius: 18px;
        padding: 2px 2px;
      }
    }
  }
</style>
