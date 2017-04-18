<template>
  <div class="banners-container">
    <swiper :options="swiperOption" >
    <swiper-slide v-for="item in banners" :data="item" :key="item" class="banner-item">
      <img :src="item.url" alt="" >
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    components: {
      swiper,
      swiperSlide
    },
    props: {
      banners: {
        type: Array
      }
    },
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
   .carousel-container {
    margin-top: 1px;
    background: #F0F0F0;
    padding-bottom: 2px;
    min-height: 350px;
  }
  .banner-item {
      width: 100%;
      position: relative;
      img {
        top: 0;
        left: 0;
        width: 100%;
      }
  }
</style>
