<template>
  <div class="tab">
    <a class="tab-item" :class="{'active': type === 0}" @click="change(0)">我的订单</a>
    <a class="tab-item" :class="{'active': type === 1}" @click="change(1)">我的团购</a>
  </div>
</template>

<script>
  export default{
    props: {
      label: {
        type: String
      },
      type: {
        type: Number
      }
    },
    methods: {
      change (num) {
        if (num === this.type) {
          return
        } else {
          this.$emit('changetype', num)
        }
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .tab{
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    .tab-item{
      flex: 1
      text-align: center
        }
      }
  a{
    color:black;
  }
  .active{
    border-bottom:2px solid #FF6666;
    color:#FF6666;
  }
</style>
