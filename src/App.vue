<template>
  <div class="app">
    <router-view></router-view>
    
    <v-bottom></v-bottom>

  </div>
</template>

<script>
import tabbar from 'components/tabbar/tabbar'
import productTypeService from 'service/product_types_service'
import userService from 'service/my_service'
export default {
  components: {
    'v-bottom': tabbar
  },
  created() {
    Promise.all([productTypeService.index(), userService.profile(), userService.defaultAddress()]).then((response) => {
      this.$store.dispatch('getProductTypes', response[0])
      console.log(response[1])
      this.$store.dispatch('setCurrentUser', response[1])
      if (response[2].has_address) {
        this.$store.dispatch('setDefaultAddress', response[2])
      }
    })
  }
}
</script>

<style>



</style>
