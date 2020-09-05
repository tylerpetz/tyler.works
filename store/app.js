const state = () => ({
  buzzwords: false,
  theme: 'midnight'
})

const mutations = {
  // toggleBuzzwords (state) {
  //   state.buzzwords = !state.buzzwords
  //   const message = state.buzzwords
  //     ? 'Highlighting Industry Buzzwords'
  //     : 'Disabling Industry Buzzwords'

  //   const type = state.buzzwords ? 'is-repo' : 'is-success'
  // },
  setActiveTheme(state, theme) {
    state.theme = theme
  }
}

export default {
  state,
  mutations
}
