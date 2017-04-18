<template>
  <div class="status">
    <h3 class="title">已开团,离成功还差 <span class="number">{{status.person}}</span> 人</h3>
    <div class="countdown">
      剩 <span class="time hour">{{remain.hour}}</span>: <span class="time minute">{{remain.minute}}</span>: <span class="time seconds">{{remain.second}}</span>自动结束
    </div>
    <div class="info">
      好货手慢无,快来买哟!
    </div>
  </div>
</template>

<script>
  import {countdown} from 'commons/js/date_utils'
  export default {
    props: {
      status: {
        type: Object
      }
    },
    data() {
      return {
        remain: {
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
    },
    methods: {
      _startCountdown() {
        this.interval = setInterval(countdown(this.status.endedAt, this.remain), 1000)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .status {
    background: #fff;
    padding: 20px;
    text-align: center;
    color: #000;
    .title {
      font-size: 18px;
      margin-bottom: 10px;
      .number {
        color: #E94850;
        font-weight: 700;
      }
    }
    .countdown {
      font-size: 16px;
      margin-bottom: 10px;
      .time {
        background: #000;
        padding: 5px;
        color: #fff;
      }
    }
    .info {
      font-size: 12px;
      color: #999;
    }
  }
</style>
