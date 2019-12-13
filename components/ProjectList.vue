<template>
  <section class="projects">
    <h1 class="list-item section-heading">
      <slot name="intro" />
    </h1>
    <div v-if="projects" class="columns is-multiline">
      <div
        v-for="(project, index) in projects.slice(0, count)"
        :key="index"
        class="column is-half"
      >
        <div class="card-container">
          <nuxt-link
            :to="'/work/' + project.fields.slug"
            :class="project.fields.slug"
            class="full-tilt card"
          >
            <img
              :src="project.fields.heroImage.fields.file.url"
              :alt="project.fields.heroImage.fields.title"
              class="card__image card__image--wide"
            />
          </nuxt-link>
          <div class="card-description">
            <h2 class="card-description__title">{{ project.fields.title }}</h2>
            <p class="card-description__details">
              {{ project.fields.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="$slots.outro">
      <p class="list-item">
        <slot name="outro" />
      </p>
    </div>
    <div v-else>
      <p class="list-item">
        This isn't all of them, that'd be nuts. The rest can be found
        <nuxt-link class="list-item__link" to="/work">on my work page</nuxt-link
        >though.
      </p>
    </div>
  </section>
</template>

<script>
import Tilt from 'vanilla-tilt'

export default {
  name: 'ProjectList',
  props: {
    count: {
      type: Number,
      default: 10
    },
    projects: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    const fullTilt = document.querySelectorAll('.full-tilt')
    Tilt.init(fullTilt, {
      glare: true,
      max: 18,
      'max-glare': 0.3,
      perspective: 1400,
      reset: false,
      speed: 200
    })
  }
}
</script>

<style lang="scss" scoped>
.projects {
  margin-bottom: $gap;

  .column {
    @include until($tablet) {
      padding-bottom: $gap / 2.5;
      padding-top: $gap / 2.5;
    }
  }

  .card-container {
    position: relative;
  }

  .card {
    border: 0;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 rgba(10, 10, 10, 0.1);
    display: flex;
    height: 350px;
    justify-content: center;
    margin-bottom: 0;
    outline: 0;
    padding-top: $gap;
    transform-style: preserve-3d;

    @include until($tablet) {
      height: 300px;
      padding-top: $gap / 1.5;
    }

    &::after {
      box-shadow: 0 20px 70px -10px rgba(51, 51, 51, 0.3),
        0 50px 100px 0 rgba(51, 51, 51, 0.15);
      content: '';
      height: 85%;
      left: 7.5%;
      position: absolute;
      top: 7.5%;
      transform: translateZ(-50px);
      transition: 0.3s;
      width: 85%;
      z-index: -1;
    }

    &__image {
      filter: drop-shadow(0 0 25px rgba(51, 51, 51, 0.4));
      pointer-events: none;
      position: relative;
      transform: translateZ(50px);
      transition: transform 550ms ease-in-out;
      z-index: 2;

      &--square {
        max-height: 90px;
        max-width: 90px;
      }

      &--wide {
        width: 75%;
        object-fit: scale-down;
        max-height: 100px;
      }
    }
  }

  .card-description {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: $gap / 2;
    pointer-events: none;
    text-shadow: 1px 1px 20px rgba(51, 51, 51, 0.4);

    @include until($tablet) {
      padding: $gap / 3;
    }

    &__title {
      font-size: $size-3;
      color: $white;
      transform: translate3d(0, 0, 0);
      opacity: 1;

      @include until($tablet) {
        font-size: $size-4;
      }
    }

    &__details {
      font-size: $size-5;
      color: $white;
      transform: translate3d(0, 0, 0);

      @include until($tablet) {
        font-size: 1.125rem;
      }
    }
  }
}

.js-tilt-glare {
  z-index: 1;
}
</style>
