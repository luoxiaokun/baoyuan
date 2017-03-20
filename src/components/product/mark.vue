<template>
  <transition name="fade">
    <div class="mark" @click="hide"></div>
  </transition>
</template>

<script>
  export default {
    methods: {
      hide() {
        this.$emit('hideControl')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .mark {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 40;
    backdrop-filter: blur(10px);      
    background: rgba(7,17,27,0.6);
    &.fade-enter-active,&.fade-leave{ 
        transition: all 0.5s;
        opacity:1;        
    }
    &.fade-leave-active,&.fade-enter{
      opacity: 0;
      transition: all 0.5s;
      background: rgba(7,17,27,0);       
    }
  }
</style>
