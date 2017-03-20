import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart'
import setting from './setting'
import productTypes from './product_types'
import shopcart from './shopcart'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    cart,
    setting,
    productTypes,
    shopcart
  }
})
