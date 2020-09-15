import { themes, defaultTheme } from '@/app/themes.js'

const state = () => ({
  theme: defaultTheme
})

const mutations = {
  SET_ACTIVE_THEME(state, theme) {
    state.theme = theme
  },
  SET_PREV_THEME(state) {
    const currentThemeIndex = themes.findIndex(theme => theme.id === state.theme)

    let theme = ''
    if (currentThemeIndex - 1 < 0) {
      theme = themes[themes.length - 1]
    } else {
      theme = themes[currentThemeIndex - 1]
    }

    state.theme = theme.id
  },
  SET_NEXT_THEME(state) {
    const currentThemeIndex = themes.findIndex(theme => theme.id === state.theme)

    let theme = ''
    if (currentThemeIndex + 1 > themes.length - 1) {
      theme = themes[0]
    } else {
      theme = themes[currentThemeIndex + 1]
    }

    state.theme = theme.id
  }
}

export default {
  state,
  mutations
}
