<template>
  <div class="header">
    <div class="step-item arrow">
      <div class="logo">
        <img src="./group@2x.png" alt="">
      </div>
      <p class="info">
        选择商品开团/参团
      </p>
    </div>
    <div class="step-item arrow">
      <div class="logo">
        <img src="./friend@2x.png" alt="">
      </div>
      <p class="info">
        邀请好友参团
      </p>
    </div>
    <div class="step-item">
      <div class="logo">
         <img src="./success@2x.png" alt="">
      </div>
      <p class="info">人满成团</p>
    </div>
  </div>  
</template>

<script>
  export default {}
</script>

<style lang="stylus" scoped>
  .header {

    text-align: center;
    background: #fff;
    color: gray;
    font-size: 12px;
    display: flex;
    padding: 10px;
    .step-item {
      flex: 1;
      text-align: center;
      position: relative;
      .logo {
        text-align: center;
        display: block;
        img {
          width: 25px;
          height: 25px;
        }
      }
      .info {
        text-align: center;
      }
      &.arrow {
        &:after {
          content: " ";
          display: inline-block;
          height: 10px;
          width: 10px;
          border-width: 1px 1px 0 0;
          border-color: #C8C8CD;
          border-style: solid;
          transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
          position: relative;
          top: -2px;
          position: absolute;
          top: 50%;
          margin-top: -8px;
          right: 0px;
        }
      }
    }
  }
</style>
