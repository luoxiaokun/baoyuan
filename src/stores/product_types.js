const GET_PRODUCT_TYPES = 'product_types'
const SET_CURRENT_PRODUCT_TYPE = 'current_product_type'

const state = {
  productTypes: [],
  currentProductType: {}
}

const getters = {
  productTypes: (state) => state.productTypes,
  currentProductType: (state) => state.currentProductType
}

const actions = {
  getProductTypes ({commit}, productTypes) {
    commit(GET_PRODUCT_TYPES, productTypes)
    if (productTypes.length > 0) {
      commit(SET_CURRENT_PRODUCT_TYPE, productTypes[0])
    }
  },
  setCurrentProductType ({commit}, currentProductType) {
    commit(SET_CURRENT_PRODUCT_TYPE, currentProductType)
  }
}

const mutations = {
  [GET_PRODUCT_TYPES] (state, productTypes) {
    state.productTypes = productTypes
  },
  [SET_CURRENT_PRODUCT_TYPE] (state, currentProductType) {
    state.currentProductType = currentProductType
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
