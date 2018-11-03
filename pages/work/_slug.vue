<template>
  <div>
    <div
      v-if="!isLoading"
      class="project">
      <header
        :class="currentProject.fields.slug"
        class="project__header">
        <div class="container">
          <h1 class="project__title">
            {{ currentProject.fields.title }}
          </h1>
        </div>
      </header>
      <div class="project__article">
        <h2 class="list-item section-heading">About the project:</h2>
        <div
          class="project__content"
          v-html="$md.render(currentProject.fields.body)"
        />
        <h2 class="list-item section-heading">Technology Used:</h2>
        <div
          v-if="currentProject.fields.tags"
          class="project__tags">
          <div
            v-for="(tag, index) in currentProject.fields.tags"
            :key="index">
            <i
              :class="'fa-' + tag.toLowerCase()"
              class="fab fa-2x" />
          </div>
        </div>
      </div>
    </div>
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

<style lang="scss">
.project {
  &__header {
    align-items: stretch;
    color: $white;
    display: flex;
    height: 200px;
    padding: 0 50px;
    width: 100%;

    .container {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
  }

  &__title {
    color: $white;
    font-size: $size-2;
    opacity: 1;
    text-shadow: 1px 1px 20px rgba(51, 51, 51, 0.4);

    @include until($tablet) {
      font-size: $size-4;
    }
  }

  &__article {
    padding: 0 50px;
  }

  &__content {
    font-size: $size-5;
  }

  &__tags {
    display: flex;
  }
}
</style>
