<template>
  <div class="content">
    <v-header></v-header>
      <div class="tab">
        <div class="tab-item">
          <router-link to="/welcome/recommend" replace>推荐</router-link>
        </div>      
        <div class="tab-item" v-for="category in categories">
          <router-link :to="{name: 'welcome_categories', params: {categoryId: category.id}}">{{category.name}}</router-link> 
        </div>
      </div>
      <div class="container">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
  </div>  
</template>

<script>
  import Header from 'components/welcome/header/header'
  import service from 'service/product_types_service'
  export default {
    components: {
      'v-header': Header
    },
    data () {
      return {
        categories: []
      }
    },
    created () {
      service.index().then((response) => {
        this.categories = response
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  @import "../../commons/css/mixin.styl"
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: .8rem;
        color: black;
        &.active
          color: #de3e43;
          border-1px(#de3e43, 2px);
  .container
    position: absolute
    top: 100px;
    bottom: 61px
    width: 100%
    overflow: auto;       
</style>
