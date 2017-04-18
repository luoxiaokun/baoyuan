import Vue from 'vue'
import {checkProductInCart} from 'commons/js/cart_utils'
const CHECK_CART = 'check_cart'
const ADD_PRODUCT = 'add_product'
const DECREASE_PRODUCT = 'decrease_product'
const CLEAR_CART = 'clear_cart'

const state = {
  is_checked: false,
  selected_products: []
}

const getters = {
  selected_products: state => state.selected_products,
  is_checked: state => state.is_checked
}

const actions = {
  addProduct ({commit}, product) {
    commit(ADD_PRODUCT, product)
  },
  decreaseProduct ({commit}, product) {
    commit(DECREASE_PRODUCT, product)
  },
  emptyCart ({commit}) {
    commit(CLEAR_CART)
  },
  checkCart ({commit}) {
    commit(CHECK_CART)
  }
}

const mutations = {
  [CHECK_CART] (state, products) {
    state.is_checked = true
    state.selected_products = products
  },
  [ADD_PRODUCT] (state, product) {
    let isFoodInCart = checkProductInCart(product, state.selected_products)
    if (isFoodInCart) {
      product.quantity ++
    } else {
      Vue.set(product, 'quantity', 1)
      state.selected_products.push(product)
    }
    // service.addFood(food.id)
  },
  [DECREASE_PRODUCT] (state, product) {
    let isFoodInCart = checkProductInCart(product, state.selected_products)
    if (isFoodInCart) {
      if (product.quantity === 0) {
        return
      } else {
        product.quantity --
      }
    }
    // service.decreaseFood(product.id)
  },
  [CLEAR_CART] (state) {
    state.selected_foods.forEach((food) => {
      food.quantity = 0
    })
    state.selected_foods = []
    // service.clearCar()
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
