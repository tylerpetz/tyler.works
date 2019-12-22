import client from '@/plugins/contentful'

const state = () => ({
  activePost: {},
  loading: true,
  posts: []
})

const actions = {
  async getPostBySlug({ commit }, slug) {
    commit('SET_LOADING', true)
    const res = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug
    })
    commit('SET_ACTIVE_POST', res.items[0])
    commit('SET_LOADING', false)
  },
  async getPosts({ commit }) {
    const res = await client.getEntries({
      content_type: 'blogPost'
    })
    console.log('getposts', res)
    const posts = res.items || []
    commit('SET_POSTS', posts)
  }
}

const mutations = {
  SET_ACTIVE_POST(state, post) {
    state.activePost = post
  },
  SET_LOADING(state, loading) {
    state.loading = loading
  },
  SET_POSTS(state, posts) {
    state.posts = posts
  }
}

export default {
  state,
  actions,
  mutations
}
