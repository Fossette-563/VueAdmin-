export default {
  namespaced: true,
  state: {
    Code: '',
    token: ''
  },
  mutations: {
    setCode(state, cod) {
      state.Code = cod
    },
    settoken(state, token) {
      state.token = token
      console.log(token, "token")
    }
  },
  actions: {},
  modules: {}
}
