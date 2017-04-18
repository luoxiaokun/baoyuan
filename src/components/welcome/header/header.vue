<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="logo">
        <img src="./logo.png" alt="" >
      </div>  
      <div class="search-group">
        <search></search>  
      </div>
    </div>
    
  </div>
</template>

<script>
  import search from './search'
  export default {
    components: {
      search
    }
  }
</script>


<style lang="stylus" scoped>
  .header {
    position: relative;
    color: #fff;
    overflow: hidden;
    padding-top: 15px;
    .content-wrapper {
      display: flex;
      width: 100%;
      .logo {
        flex: 0 0 100px;
        width: 80px;
        text-align: center;
        padding: 0 15px;
        align-items: center;
        display: flex;
        box-align: center;
        img {
          width: 100%;
          vertical-align: middle;
        }
      }
      .search-group {
        flex: 1;
        padding-right: 15px;
      }
    }
  }
</style>
