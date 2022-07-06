import { setItem, getItem, removeItem } from '../../utils/storage'
import user from '@/api/user'
export default {
  namespaced: true,
  state: {
    Code: '',
    token: getItem('token') || '',
    userInfo: getItem('userInfo') || {},
    side: []
  },
  mutations: {
    setCode(state, cod) {
      state.Code = cod
    },
    settoken(state, token) {
      state.token = token
      setItem('token', token)
      console.log(token, 'token')
    },
    setUseInfo(state, user) {
      state.userInfo = user
      setItem('userInfo', user)
    },
    setside(state, side) {
      state.side = side.authoritys
    }
  },
  actions: {
    setOutlayout({ commit }) {
      commit('settoken', '')
      removeItem('token', '')
    },
    async getNav({ commit }, side) {
      const { authoritys } = await user.side()
      commit('setside', authoritys)
      return authoritys
    }
  },
  modules: {}
}
