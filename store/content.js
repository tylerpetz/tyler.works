import createClient from '@/app/contentful'

const state = () => ({
  brags: [],
  techBrags: []
})

const actions = {
  async getBrags ({ commit }) {
    try {
      const client = createClient()
      const res = await client.getEntries({
        content_type: 'brag',
        order: 'sys.createdAt'
      })
      const brags = res.items || []
      commit('SET_BRAGS', brags)
    } catch (e) {
      console.debug(e)
    }
  }
}

const mutations = {
  SET_BRAGS (state, brags = []) {
    state.brags = brags
  },
  // SET_LOADING (state, loading) {
  //   state.loading = loading
  // },
  // SET_POSTS (state, posts) {
  //   state.posts = posts
  // }
}

export default {
  state,
  actions,
  mutations
}
