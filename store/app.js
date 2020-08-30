import { Toast } from 'buefy/dist/components/toast'

const state = () => ({
  buzzwords: false,
  darkMode: false,
  formSubmitted: false,
  formError: false,
  pageName: 'index',
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

    Toast.open({
      message,
      type,
      position: 'is-bottom',
      duration: 600
    })
  },
  toggleDarkMode (state) {
    state.darkMode = !state.darkMode
  },
  updatePageName (state, pageName) {
    state.pageName = pageName
  },
  setActiveTheme(state, theme) {
    state.theme = theme
  }
}

export default {
  state,
  mutations
}
