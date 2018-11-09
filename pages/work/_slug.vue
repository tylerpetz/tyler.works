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
          v-html="$md.render(currentProject.fields.body)" />
        <div
          v-for="thumbnailSet in currentProject.fields.thumbnailSets"
          :key="thumbnailSet.id">
          <h4 class="project__gallery--title">{{ thumbnailSet.title }}</h4>
          <section class="project__gallery">
            <figure
              v-for="thumbs in thumbnailSet.thumbs"
              :key="thumbs.url"
              :class="`project__gallery--${thumbs.size}`"
              class="image project__gallery--desktop">
              <img
                :src="thumbs.url"
                @click="imageModal(thumbs.url, thumbs.size)">
            </figure>
          </section>
        </div>
        <div class="project__buttons">
          <a
            v-if="currentProject.fields.projectUrl"
            :href="currentProject.fields.projectUrl"
            class="project__button"
            target="_blank">
            View this project on the internet.
          </a>
          <a
            v-if="currentProject.fields.repoUrl"
            :href="currentProject.fields.repoUrl"
            class="project__button"
            target="_blank">
            Check out this repository on Github.
          </a>
        </div>
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
  methods: {
    getImageRatio(size) {
      if (size === "desktop") {
        return "is-4by3";
      } else if (size === "mobile") {
        return "is-9by16";
      }
    },
    imageModal(url, size) {
      let sizeClass = this.getImageRatio(size);

      this.$modal.open(
        `<figure class="image ${sizeClass}">
          <img src="${url}">
        </figure>`
      );
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
    }
  }

  .columns {
    padding: 1rem;
    align-items: center;
  }

  &__tags {
    display: flex;
  }

  &__gallery {
    align-content: stretch;
    align-items: stretch;
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    justify-content: space-between;

    &--half {
      width: calc(50% - 0.5rem);
    }

    &--third {
      width: calc(33.3% - 0.67rem);
    }

    &--quarter {
      width: calc(25% - 0.75rem);
    }

    .image {
      margin-bottom: 1rem;

      img {
        box-shadow: 0 20px 70px -10px rgba(51, 51, 51, 0.15),
          0 0px 100px 0 rgba(51, 51, 51, 0.1);
      }
    }

    &--title {
      color: $blue;
      font-size: $size-5;
      font-style: italic;
    }
  }

  &__buttons {
    padding: ($gap / 2) 0;
    background: $purple;
    justify-content: space-evenly;
    display: flex;
    margin-top: $gap;
    background: linear-gradient(135deg, $blue 0%, $purple 100%);
  }

  &__button {
    color: $white;
    font-size: $size-4;

    &:hover {
      color: $green;
    }
  }
}

.modal-content,
.modal-card {
  margin: 0 20px;
  max-height: calc(100vh - 160px);
  overflow: auto;
  position: relative;
  width: 100%;
}
</style>
