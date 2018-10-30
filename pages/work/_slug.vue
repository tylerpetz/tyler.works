<template>
  <div class="single-project">
    <div
      v-if="!isLoading"
      class="single-project__article">
      <h1 class="single-project__title">
        {{ currentProject.fields.title }}
      </h1>
      <div
        class="single-project__content"
        v-html="$md.render(currentProject.fields.body)"
      />
    </div>
    <p
      v-else
      class="single-project__loading">
      Loading
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    currentProject() {
      return this.$store.state.project.currentProject;
    },
    isLoading() {
      return this.$store.state.project.isLoading;
    }
  },
  async fetch({ store, params }) {
    await store.dispatch("project/getProjectBySlug", params.slug);
  }
};
</script>
