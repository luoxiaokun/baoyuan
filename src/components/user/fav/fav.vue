<template>
  <div>
  <v-title :title="'我的收藏'"></v-title>
    <div class="collect-main">
      <div class="fav-num"><span>全部收藏({{collectes.length}})</span></div>
      <div class="">
        <ul>
          <item v-for="item in collectes" :item="item" :key="item.id"></item>
        </ul>
      </div>
    </div>

  </div>
</template>
<script>
  import title from 'components/title/title'
  import item from './fav-item'
  import collectService from 'service/collect_service'
  export default {
    components: {
      'v-title': title,
      item
    },
    data () {
      return {
        collectes: []
      }
    },
    created () {
      collectService.index().then((response) => {
        this.collectes = response
      })
    }
  }
</script>
<style lang="stylus" scoped>
   .collect-main {
    position: absolute;
    top: 44px;
    bottom: 0;
    width: 100%;
    left:0;
    right:0;
    overflow: auto;
    background: white;
    color: #000;
    text-align:left;
      .fav-num{
        text-align:left;
        padding:.5rem;
        background-color:white;
        border-top:1px solid #E6E6E6;
      }
   }
</style>

