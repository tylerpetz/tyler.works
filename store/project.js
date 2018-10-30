import client from "@/plugins/contentful";

export const state = () => ({
  currentProject: {},
  projectLoading: true
});

export const mutations = {
  setCurrentProject(state, payload) {
    state.currentProject = payload;
  },
  setLoading(state, payload) {
    state.projectLoading = payload;
  }
};

export const actions = {
  async getProjectBySlug({ commit }, slug) {
    commit("setLoading", true);
    const response = await client.getEntries({
      content_type: "project",
      "fields.slug": slug
    });
    commit("setCurrentProject", response.items[0]);
    commit("setLoading", false);
  }
};
