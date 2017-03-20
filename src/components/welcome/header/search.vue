<template>
  <div class="weui-search-bar" ref="searchBar">
            <form class="weui-search-bar__form" @submit.prevent="searchProduct">
                <div class="weui-search-bar__box">
                    <i class="weui-icon-search"></i>
                    <input type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索商品" required="" v-model="searchStr">
                    <a href="javascript:" class="weui-icon-clear"></a>
                </div>
                <label class="weui-search-bar__label" id="searchText" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                    <i class="weui-icon-search"></i>
                    <span>搜索</span>
                </label>
            </form>
            <a href="javascript:" class="weui-search-bar__cancel-btn" >取消</a>
  </div>
</template>

<script>
  import Vue from 'vue'
  import weui from 'weui.js'
  import eventBus from '@/event_bus'
  export default {
    created () {
      Vue.nextTick(() => {
        weui.searchBar(this.$refs.searchBar)
      })
    },
    data() {
      return {
        searchStr: null
      }
    },
    methods: {
      searchProduct() {
        if (this.searchStr) {
          this.$router.push({ name: 'search_product', params: {searchStr: this.searchStr} })
          eventBus.$emit('searchProduct', this.searchStr)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  background = #f0f0f0;
  .weui-search-bar {
    border: none;
  }
  .weui-search-bar__form {
    background: background;
    .weui-search-bar__box {
      background: background;
    }
    .weui-search-bar__label {
      background: background;
      border: none;
    }
  }
</style>
