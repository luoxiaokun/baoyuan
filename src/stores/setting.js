const ACTIVE = 'navActive'
const state = {
  currentNav: 'index'
}

const getters = {
  currentNav: (state) => state.currentNav
}

const actions = {
  setNav ({commit}, nav) {
    commit(ACTIVE, nav)
  }
}

const mutations = {
  [ACTIVE] (state, nav) {
    state.currentNav = nav
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
