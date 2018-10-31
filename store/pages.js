export const state = () => ({
  page: "index"
});

export const mutations = {
  updatePage(state, pageName) {
    console.log(state, pageName);
    state.page = pageName;
  }
};
