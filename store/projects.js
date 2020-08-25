import createClient from '@/api/contentful'

const state = () => ({
  activeProject: {},
  loading: true,
  projects: []
})

const actions = {
  async getProjectBySlug ({ commit }, slug) {
    commit('SET_LOADING', true)
    try {
      const client = createClient()
      const res = await client.getEntries({
        content_type: 'project',
        'fields.slug': slug
      })
      commit('SET_ACTIVE_PROJECT', res.items[0])
    } catch (e) { } finally {
      commit('SET_LOADING', false)
    }
  },
  async getProjects ({ commit }) {
    try {
      const client = createClient()
      const res = await client.getEntries({
        content_type: 'project',
        order: 'sys.createdAt'
      })
      const projects = res.items || []
      commit('SET_PROJECTS', projects)
    } catch (e) {}
  }
}

const mutations = {
  SET_ACTIVE_PROJECT (state, project = {}) {
    state.activeProject = project
  },
  SET_LOADING (state, loading) {
    state.loading = loading
  },
  SET_PROJECTS (state, projects = []) {
    state.projects = projects
  }
}

export default {
  state,
  actions,
  mutations
}
