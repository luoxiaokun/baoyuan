<template>
  <div class="tab">
    <a class="tab-item"  @click="change(0)">
    <span :class="{'active': type === 0}">待成团</span></a>
    <a class="tab-item"  @click="change(1)">
      <span :class="{'active': type === 1}">已成团</span>
    </a>
    <a class="tab-item"  @click="change(2)">
      <span :class="{'active': type === 2}">拼团失败</span>
    </a>
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
    height: 44px
    line-height: 44px
    .tab-item{
      flex: 1
      text-align: center
        }
      }
  a{
    color:black;
    font-size:.9rem;
  }
  .active{
    border-bottom:2px solid #FF6666;
    padding-bottom:11px;
    color:#FF6666;
  }
</style>
