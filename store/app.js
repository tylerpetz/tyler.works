import themes from '@/app/themes.js'

const state = () => ({
  theme: '8008'
})

const mutations = {
  SET_ACTIVE_THEME(state, theme) {
    state.theme = theme
  },
  SET_PREV_THEME(state) {
    const currentThemeIndex = themes.findIndex(theme => theme === state.theme)

    let theme = ''
    if (currentThemeIndex - 1 < 0) {
      theme = themes[themes.length - 1]
    } else {
      theme = themes[currentThemeIndex - 1]
    }

    state.theme = theme
  },
  SET_NEXT_THEME(state) {
    const currentThemeIndex = themes.findIndex(theme => theme === state.theme)

    let theme = ''
    if (currentThemeIndex + 1 > themes.length - 1) {
      theme = themes[0]
    } else {
      theme = themes[currentThemeIndex + 1]
    }

    state.theme = theme
  }
}

export default {
  state,
  mutations
}
