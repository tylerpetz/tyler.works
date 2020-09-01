const state = () => ({
  buzzwords: false,
  formSubmitted: false,
  formError: false,
  theme: 'midnight'
})

const mutations = {
  formError (state, error) {
    state.formError = error
    state.formSubmitted = true
  },
  formSubmitted (state, submitted = true) {
    state.formSubmitted = submitted
  },
  toggleBuzzwords (state) {
    state.buzzwords = !state.buzzwords
    const message = state.buzzwords
      ? 'Highlighting Industry Buzzwords'
      : 'Disabling Industry Buzzwords'

    const type = state.buzzwords ? 'is-repo' : 'is-success'
  },
  setActiveTheme(state, theme) {
    state.theme = theme
  }
}

export default {
  state,
  mutations
}
