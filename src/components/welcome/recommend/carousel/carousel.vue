<template>
  <div class="carousel-container">
  <swiper :options="swiperOption" >
  <swiper-slide v-for="item in banners" :data="item" :key="item" class="carousel-item">
    <a :href="item.url">
    <img :src="item.image" alt="" >
    </a>
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
    max-height: 350px;
  }
  .carousel-item {
    width: 100%;
    img {
      width: 100%;
    }
  }
</style>
