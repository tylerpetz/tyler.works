import createClient from '@/app/contentful'

const state = () => ({
  activePost: {},
  loading: true,
  posts: []
})

const actions = {
  async getPostBySlug ({ commit }, slug) {
    commit('SET_LOADING', true)
    try {
      const client = createClient(this.$config.spaceId, this.$config.accessToken)
      const res = await client.getEntries({
        content_type: 'blogPost',
        'fields.slug': slug
      })
      commit('SET_ACTIVE_POST', res.items[0])
    } catch (e) {
      console.debug(e)
    } finally {
      commit('SET_LOADING', false)
    }
  },
  async getPosts ({ commit }) {
    try {
      const client = createClient(this.$config.spaceId, this.$config.accessToken)
      const res = await client.getEntries({
        content_type: 'blogPost'
      })
      const posts = res.items || []
      commit('SET_POSTS', posts)
    } catch (e) {
      console.debug(e)
    }
  }
}

const mutations = {
  SET_ACTIVE_POST (state, post) {
    state.activePost = post
  },
  SET_LOADING (state, loading) {
    state.loading = loading
  },
  SET_POSTS (state, posts) {
    state.posts = posts
  }
}

export default {
  state,
  actions,
  mutations
}
