<template>
  <div class="app">
    <router-view></router-view>
    
    <v-bottom></v-bottom>

  </div>
</template>

<script>
import tabbar from 'components/tabbar/tabbar'
import productTypeService from 'service/product_types_service'
export default {
  components: {
    'v-bottom': tabbar
  },
  created() {
    productTypeService.index().then((response) => {
      this.$store.dispatch('getProductTypes', response)
    })
  }
}
</script>

<style>



</style>
