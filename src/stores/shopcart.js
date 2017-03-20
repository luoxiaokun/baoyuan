const SET_PRODUCT = 'product'
const SET_GROUP = 'group'
const RESET_CART = 'reset_cart'
const SET_ADDRESS = 'address'
const SET_ORDER = 'order'
const ADD_QUANTITY = 'add_quantity'
const DECREASE_QUANTITY = 'decrease_quantity'
const RESET_QUANTITY = 'reset_quantity'
const GROUP_BUY = 'group_buy'
const SINGLE_BUY = 'single_buy'

const state = {
  product: null,
  quantity: 1,
  group: null,
  address: null,
  isGroupBuy: false
}

const getters = {
  product: (state) => state.product,
  quantity: (state) => state.quantity,
  group: (state) => state.group,
  address: (state) => state.address,
  isGroupBuy: (state) => state.isGroupBuy
}

const actions = {
  setProduct ({commit}, product) {
    commit(SET_PRODUCT, product)
  },
  setGroup ({commit}, group) {
    commit(SET_GROUP, group)
  },
  setAddress({commit}, address) {
    commit(SET_ADDRESS, address)
  },
  setOrder({commit}, {product, group = null, address}) {
    commit(SET_ORDER, {product, group, address})
  },
  resetCart({commit}) {
    commit(RESET_CART)
  },
  addQuantity({commit}) {
    commit(ADD_QUANTITY)
  },
  decreaseQuantity({commit}) {
    commit(DECREASE_QUANTITY)
  },
  groupBuy({commit}) {
    commit(GROUP_BUY)
  },
  singleBuy({commit}) {
    commit(SINGLE_BUY)
  },
  resetQuantity({commit}) {
    commit(RESET_QUANTITY)
  }
}

const mutations = {
  [SET_PRODUCT] (state, product) {
    state.product = product
  },
  [SET_GROUP] (state, group) {
    state.group = group
  },
  [SET_ADDRESS] (state, address) {
    state.address = address
  },
  [SET_ORDER] (state, order) {
    state.order = order
  },
  [RESET_CART] (state) {
    state.product = null
    state.quantity = 1
    state.group = null
    state.address = null
  },
  [ADD_QUANTITY] (state) {
    state.quantity += 1
  },
  [DECREASE_QUANTITY] (state) {
    if (state.quantity === 1) {
      return
    } else {
      state.quantity -= 1
    }
  },
  [SINGLE_BUY] (state) {
    state.isGroupBuy = false
  },
  [GROUP_BUY] (state) {
    state.isGroupBuy = true
  },
  [RESET_QUANTITY] (state) {
    state.quantity = 1
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
