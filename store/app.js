const state = () => ({
  theme: '8008'
})

const mutations = {
  setActiveTheme(state, theme) {
    state.theme = theme
  }
}

export default {
  state,
  mutations
}
