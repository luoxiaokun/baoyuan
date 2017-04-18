<template>
  <ul class="delivery">
    <li class="mall_detail_1">
        <span>
        <i class="iconfont icon-wancheng"></i>
        包邮</span>
    </li>
    <li class="mall_detail_2">
        <span>
        <i class="iconfont icon-wancheng"></i>
        7天退换</span>
    </li>
    <li class="mall_detail_3">
        <span>
        <i class="iconfont icon-wancheng"></i>
        假一赔十</span>
    </li>
  </ul>
</template>

<script>
  export default {}
</script>

<style lang="stylus" scoped>
    .delivery {
      border-top: 1px solid #EDEDED;
      padding: 4px 4px;
      position: relative;
      display: flex;
      text-align: left;
      color: rgb(147, 153, 159);
      font-size: 14px;
      line-height: 22px;
      li {
        flex: 1;    
        i {
          color: rgb(222,62,67);
        }    
      }
    }
</style>
