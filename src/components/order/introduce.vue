<template>
  <div class="introduce">
    <div class="introduce-wrapper">
      <h5 class="title">包圆儿玩法</h5>
      <div class="steps">
        <div class="step-item">
           <div class="step_num">1</div>
           <div class="step_detail">
                    <p class="step_tit">选择<br>心仪商品</p>
            </div>
        </div>
        <div class="step-item active">
           <div class="step_num">2</div>
           <div class="step_detail">
               <p class="step_tit">支付开团<br>或参团</p>
           </div>
        </div>
        <div class="step-item">
          <div class="step_num">3</div>
          <div class="step_detail">
              <p class="step_tit">等待好友<br>参团支付</p>
          </div>
        </div>

        <div class="step-item">
                <div class="step_num">4</div>
                <div class="step_detail">
                    <p class="step_tit">达到人数<br>团购成功</p>
                </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" scoped>
  .introduce-wrapper {
    color: #000;
    background: #fff;
    padding: 5px;
    .title {
      font-size: 18px;
      text-align: left;
      margin-bottom: 15px;
    }
    .steps{
      display: flex;

    }
    .step-item  {
      flex: 1;
      margin-bottom: 10px;
      display: flex;
      .step_num {
        flex: 0 0 25px;
        display: inline-block;
        font-size: 18px;
        border: 1px solid #c0bfc4;
        color: #c0bfc4;
        border-radius: 20px;
        line-height: 25px;
        width: 25px;
        height: 25px;        
      }
      .step_detail {
        flex: 1;
        display: inline-block;
        margin-left: 2px;
        color: #c0bfc4;
        font-size: 10px;
      }
      &.active {
        .step_num {
          background: #E84850;
          color: #fff;
          border: 1px solid #E84850;
        }
        .step_detail {
          color: #E84850;
        }
      }
    }
  }
</style>
