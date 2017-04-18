<template>
  <div class="weui-tabbar">
    <div class="button-group" v-if="group.status == 0">
      <div class="btn-buy" @click="open()" >
         我要参团
       </div>
    </div>
    <div class="button-group" v-if="group.status != 0">
       <div class="btn-buy open" @click="open()">
         去开团
       </div>
    </div>
    <div class="button-group" v-if="group.status != 0">
       <div class="btn-buy " @click="home()">
         查看其它拼团
       </div>
    </div>
   </div>
</template>

<script>
  export default {
    props: {
      group: {
        type: Object
      }
    },
    methods: {
      open() {
        if (this.group.status === 0) {
          this.$store.dispatch('setGroup', this.group)
        }
        this.$store.dispatch('groupBuy')
        this.$emit('showControl')
      },
      home() {
        this.$router.push({name: 'recommend'})
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .weui-tabbar {
    z-index: 2000;
    height: 66px;
  }
  .button-group {
    flex: 1;
    padding: 5px 10px;
    align-items: center;
    display: flex;
    .btn-buy {      
      flex: 1;
      background: rgb(222,62,67);
      color: #fff;
      padding: 10px;
      border-radius: 5px;
      &.open {
        background: #F8656C;
      }
    }
    
  }
</style>
