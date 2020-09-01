import createClient from '@/api/contentful'

const state = () => ({
  brags: [],
  techBrags: []
})

const actions = {
  async getBrags ({ commit }) {
    // try {
      const client = createClient()
      const res = await client.getEntries({
        content_type: 'brag'
      })
      const brags = res.items || []
      console.log('brags', brags)
      commit('SET_BRAGS', brags)
    // } catch (e) { }
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
