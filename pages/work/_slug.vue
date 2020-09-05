<script>
export default {
  name: 'project',
  middleware: 'project',
  computed: {
    project () {
      return this.$store.state.projects.activeProject
    },
    isLoading () {
      return this.$store.state.projects.loading
    }
  },
  methods: {
    getImageRatio (size) {
      if (size === 'desktop') {
        return 'is-4by3'
      } else if (size === 'mobile') {
        return 'is-9by16'
      }
    },
    imageModal (url, size) {
      const sizeClass = this.getImageRatio(size)
      this.$modal.open({
        content: `<figure class="image ${sizeClass}">
          <img src="${url}">
        </figure>`
      })
    }
  },
  head () {
    return {
      title: `Tyler Petz - ${this.project.fields.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.project.fields.description
        }
      ]
    }
  }
}
</script>

<template>
  <div v-if="!isLoading">
    <article class="project">
      <header class="project__header">
        <h1 class="project__title">
          {{ project.fields.title }}
        </h1>
        <div
          :class="project.fields.slug"
          class="project__border"
        />
      </header>
      <section
        class="project__content content prose"
        v-interpolation
        v-html="$md.render(project.fields.body)"
      />
      <section class="gallery">
        <div
          v-for="thumbnailSet in project.fields.thumbnailSets"
          :key="thumbnailSet.id"
          class="gallery"
        >
          <h4 class="project__gallery--title">
            {{ thumbnailSet.title }}
          </h4>
          <div class="project__gallery">
            <figure
              v-for="thumbs in thumbnailSet.thumbs"
              :key="thumbs.url"
              :class="`project__gallery--${thumbs.size}`"
              class="image project__gallery--desktop"
            >
              <a @click="imageModal(thumbs.url, thumbs.size)">
                <img :src="thumbs.url">
              </a>
            </figure>
          </div>
        </div>
      </section>
      <footer class="project__buttons">
        <a
          v-if="project.fields.projectUrl"
          :href="project.fields.projectUrl"
          class="project__button"
          target="_blank"
        >View this project on the internet.</a>
        <a
          v-if="project.fields.repoUrl"
          :href="project.fields.repoUrl"
          class="project__button"
          target="_blank"
        >Check out this repository on Github.</a>
      </footer>
    </article>
  </div>
</template>

<style lang="scss">
// .project {
//   &__header {
//     display: flex;
//     flex-direction: column;
//     margin-bottom: $gap / 2;
//     padding-top: $gap;
//     width: 100%;
//   }

//   &__title {
//     color: $blue;
//     font-size: $size-2;
//     font-weight: bold;
//     opacity: 1;

//     @include until($tablet) {
//       font-size: $size-4;
//     }
//   }

//   &__border {
//     display: block;
//     height: 10px;
//     margin-top: $gap / 2;
//     width: 100%;
//   }

//   &__content {
//     font-size: $size-5;

//     h1,
//     h2,
//     h3,
//     h4,
//     h5,
//     h6 {
//       color: $blue;
//       font-weight: normal;
//     }

//     h1 {
//       color: $blue;
//     }

//     h2 {
//       color: $red;
//       font-style: italic;
//     }

//     h3 {
//       color: $green;
//     }
//   }

//   .columns {
//     align-items: center;
//     padding: 1rem;
//   }

//   &__tags {
//     display: flex;
//   }

//   &__gallery {
//     align-content: stretch;
//     align-items: stretch;
//     display: flex;
//     flex-wrap: wrap;
//     height: 100%;
//     justify-content: space-between;

//     @include until($tablet) {
//       align-items: center;
//       flex-direction: column;
//     }

//     &--half {
//       width: calc(50% - 0.5rem);
//     }

//     &--third {
//       width: calc(33.3% - 0.67rem);
//     }

//     &--quarter {
//       width: calc(25% - 0.75rem);
//     }

//     .image {
//       cursor: pointer;
//       margin-bottom: 1rem;

//       @include until($tablet) {
//         max-width: 320px;
//         width: 100%;
//       }

//       img {
//         box-shadow: 0 20px 70px -10px rgba(51, 51, 51, 0.15),
//           0 0px 100px 0 rgba(51, 51, 51, 0.1);
//       }
//     }

//     &--title {
//       color: $blue;
//       font-size: $size-5;
//       font-style: italic;

//       @include until($tablet) {
//         margin-bottom: 5px;
//         text-align: center;
//       }
//     }
//   }

//   &__buttons {
//     background: $purple;
//     background: linear-gradient(135deg, $blue 0%, $purple 100%);
//     display: flex;
//     justify-content: space-evenly;
//     margin-top: $gap;
//     padding: ($gap / 2) 0;
//   }

//   &__button {
//     color: $white;
//     font-size: $size-4;

//     &:hover {
//       color: $green;
//     }

//     @include until($tablet) {
//       font-size: $size-5;
//     }

//     @media screen and (max-width: 480px) {
//       font-size: $size-6;
//     }
//   }
// }

// .modal-content,
// .modal-card {
//   margin: 0 20px;
//   max-height: calc(100vh - 160px);
//   overflow: auto;
//   position: relative;
//   width: 100%;
// }
</style>
