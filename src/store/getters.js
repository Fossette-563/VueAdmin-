const getters = {
  code: (state) => state.user.Code,
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  nav: (state) => state.user.side,
  hasNav: (state) => {
    return JSON.stringify(state.user.side) !== '[]'
  },
  tagsView: (state) => state.tags.tags
}

export default getters
