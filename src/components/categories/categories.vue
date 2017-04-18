<template>
  <div>
    <div class="search-group">
      <div class="search-wrapper">
        <search></search>
      </div>
    </div>
    <div class="container">
      <all-category></all-category>
    </div>
  </div>
</template>

<script>
  import search from 'components/welcome/header/search'
  import allCategory from 'components/categories/all_category'
  export default {
    components: {
      search,
      allCategory
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    position: absolute
    top: 70px;
    bottom: 61px
    width: 100%
    overflow: auto;         
  .search-group {    
    width: 100%;
    background: #fff;
    text-align: center;
    .search-wrapper {
      margin: 10px 15px;
    }
  }
</style>  
