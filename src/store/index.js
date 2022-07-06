import { createStore } from 'vuex'
import user from './modules/user'
import getters from './getters'
import permission from './modules/permission'
import tags from './modules/tags'
export default createStore({
  modules: {
    user,
    permission,
    tags
  },
  getters
})
