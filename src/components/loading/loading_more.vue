<template>
  <div class="weui-loadmore">
    <i class="weui-loading"></i>
    <span class="weui-loadmore__tips">{{this.label}}</span>
  </div>
</template>

<script>
  export default {
    props: {
      label: {
        type: String
      }
    }
  }
</script>
