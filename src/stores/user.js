const SET_USER = 'set_user'
const SET_DEFAULT_ADDRESS = 'set_default_address'
const state = {
  currentUser: null,
  defaultAddress: null
}

const getters = {
  currentUser: (state) => state.currentUser,
  defaultAddress: (state) => state.defaultAddress
}

const actions = {
  setCurrentUser ({commit}, user) {
    commit(SET_USER, user)
  },
  setDefaultAddress ({commit}, address) {
    commit(SET_DEFAULT_ADDRESS, address)
  }
}

const mutations = {
  [SET_USER] (state, user) {
    state.currentUser = user
  },
  [SET_DEFAULT_ADDRESS] (state, address) {
    state.defaultAddress = address
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
