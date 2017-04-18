<template>
  <div class="weui-tabbar">
    <router-link to="/welcome/recommend" replace class="weui-tabbar__item">
       <i class="weui-tabbar__icon icon-shouye iconfont"></i>
      <p class="weui-tabbar__label">首页</p>
    </router-link>
    <router-link to="/categories" replace class="weui-tabbar__item">
      <i class="weui-tabbar__icon icon-shangpinzhonglei iconfont"></i>
      <p class="weui-tabbar__label">分类</p>
    </router-link>
     <router-link to="/profile" replace class="weui-tabbar__item">
      <hint-dot :icon="'icon-geren'" :is-show="showHint"></hint-dot>  
      <p class="weui-tabbar__label">我的</p>
    </router-link>
  </div>
</template>

<script>
  import badge from './badge'
  import hintDot from './hint_dot'
  import {mapGetters} from 'vuex'
  export default {
    components: {
      badge,
      hintDot
    },
    computed: {
      ...mapGetters({
        active: 'currentNav'
      })
    },
    data () {
      return {
        shopcart: require('./icon_tabbar.png'),
        my_icon: require('./icon_tabbar.png'),
        shopcartNum: 2,
        showHint: false
      }
    },
    methods: {
      is_active (active) {
        if (this.active === active) {
          return true
        } else {
          return false
        }
      },
      go (active) {
        this.$store.dispatch('setNav', active)
      }
    }
  }

</script>

<style lang="stylus" >
    .weui-tabbar__icon {
      margin-bottom: 0.5rem;
    }
    .active {
      .weui-tabbar__icon,.weui-tabbar__label {
        color: rgb(222,62,67);
      }
    }
</style>
