<template>
  <div v-if="!isLoading">
    <article class="project">
      <header class="project__header">
        <h1 class="project__title">
          {{ currentProject.fields.title }}
        </h1>

        <div
          :class="currentProject.fields.slug"
          class="project__border" />
      </header>
      <section>
        <div
          class="project__content content"
          v-html="$md.render(currentProject.fields.body)"
        />
        <button
          v-if="currentProject.fields.projectUrl"
          :href="currentProject.fields.projectUrl"
          class="button is-external is-large"
          target="_blank">
          <span>View this project on the internet.</span>
          <span class="icon">
            <i class="fas fa-external-link-alt" />
          </span>
        </button>
        <button
          v-if="currentProject.fields.repoUrl"
          :href="currentProject.fields.repoUrl"
          class="button is-repo is-large"
          target="_blank">
          <span>Check out this repository on Github.</span>
          <span class="icon">
            <i class="fab fa-github-alt" />
          </span>
        </button>
      </section>
    </article>
    <ContactForm intro="Use this contact form to get in touch with me." />
  </div>
</template>

<script>
import ContactForm from "~/components/ContactForm.vue";

export default {
  components: {
    ContactForm
  },
  head() {
    return {
      title: `Tyler Petz - ${this.currentProject.fields.title}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.currentProject.fields.description
        }
      ]
    };
  },
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
    padding-top: $gap;
    flex-direction: column;
    display: flex;
    margin-bottom: $gap / 2;
    width: 100%;

    .container {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
  }

  &__title {
    font-size: $size-2;
    opacity: 1;
    font-weight: bold;
    color: $blue;

    @include until($tablet) {
      font-size: $size-4;
    }
  }

  &__border {
    width: 100%;
    display: block;
    height: 10px;
    margin-top: $gap / 2;
  }

  &__content {
    font-size: $size-5;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: $blue;
      font-weight: normal;
    }

    h1 {
      color: $blue;
    }

    h2 {
      color: $red;
      font-style: italic;
    }

    h3 {
      color: $green;
      font-weight: bold;
    }
  }

  &__tags {
    display: flex;
  }
}
</style>
