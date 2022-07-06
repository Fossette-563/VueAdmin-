import { setItem, getItem } from '@/utils/storage'
export default {
  namespaced: true,
  state: () => ({
    tags: getItem('tags') || []
  }),
  mutations: {
    setTags(state, view) {
      if (!view.title) return
      const flag = state.tags.find((item) => item.path === view.path)
      if (!flag) {
        state.tags.push(view)
      }
      setItem('tags', state.tags)
    },
    deleteTags(state, person) {
      if (person.path === '/index') return
      state.tags.splice(person.index, 1)
      setItem('tags', state.tags)
    }
  }
}
