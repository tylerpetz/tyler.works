<template>
  <section class="projects">
    <h1
      v-if="intro"
      class="list-item section-heading"
      v-html="intro"/>
    <h1
      v-else
      class="list-item section-heading">Here are those projects I was talking about.</h1>
    <div class="columns is-multiline">
      <div
        v-for="project in projectsToDisplay"
        :key="project.slug"
        class="column is-half">
        <div class="card-container">
          <a
            :class="'card--' + project.slug"
            class="full-tilt card">
            <img
              :src="project.icon"
              :alt="project.name"
              class="card__image">
          </a>
          <div class="card-description">
            <h2 class="card-description__title">{{ project.name }}</h2>
            <p class="card-description__details">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <p
      v-if="outro"
      class="list-item"
      v-html="outro"/>
    <p
      v-else
      class="list-item">This isn't all of them, that'd be nuts. The rest can be found <router-link
        class="list-item__link"
        to="/work">here</router-link> though.</p>
  </section>
</template>

<script>
import Tilt from "vanilla-tilt";

export default {
  name: "Projects",
  props: {
    intro: {
      type: String,
      default: ""
    },
    outro: {
      type: String,
      default: ""
    },
    projectCount: {
      type: Number,
      default: 2
    }
  },
  data: () => {
    return {
      projects: [
        {
          name: "Tee Up Fore Autism",
          description:
            "A website for an annual golf tournament that helps support a local non-profit school.",
          icon: "golfball.svg",
          slug: "teeup"
        },
        {
          name: "Wishlisted",
          description:
            "A web platform for sharing awesome lists of products for your specific purchasing needs.",
          icon: "w.svg",
          slug: "wishlisted"
        },
        {
          name: "Strive Media",
          description:
            "A website for my IRL web developer job. I learned a lot of web development skills here.",
          icon: "golfball.svg",
          slug: "strive"
        },
        {
          name: "The Stadium Gallery",
          description:
            "A website for a local business that sells some big ol' pictures of sports stadiums. I made it.",
          icon: "golfball.svg",
          slug: "stadium"
        },
        {
          name: "Tyler's Record Collection",
          description:
            "A web project to display my record collection in an interesting way, using the Discogs web API.",
          icon: "vinyl.svg",
          slug: "records"
        },
        {
          name: "Overwatch Player Comparison",
          description:
            "A web project that allows you to look at and compare stats for players of the popular video game, Overwatch.",
          icon: "overwatch.svg",
          slug: "overwatch"
        }
      ]
    };
  },
  computed: {
    projectsToDisplay: function() {
      if (this.projectCount) {
        return this.projects.slice(0, this.projectCount);
      } else {
        return this.projects;
      }
    }
  },
  mounted() {
    const fullTilt = document.querySelectorAll(".full-tilt");
    Tilt.init(fullTilt, {
      perspective: 1400,
      max: 20,
      speed: 200,
      reset: false
    });
  }
};
</script>

<style scoped lang="scss">
.projects {
  margin-bottom: $gap;

  .column {
    @include until($tablet) {
      padding-bottom: $gap / 2.5;
      padding-top: $gap / 2.5;
    }
  }
}

.card-container {
  position: relative;
}

.card {
  background-color: $green;
  border: 0;
  display: flex;
  height: 350px;
  justify-content: center;
  margin-bottom: 0;
  outline: 0;
  padding-top: $gap;
  transform-style: preserve-3d;

  &::after {
    box-shadow: 0 20px 70px -10px rgba(51, 51, 51, 0.3),
      0 50px 100px 0 rgba(51, 51, 51, 0.15);
    content: "";
    height: 90%;
    left: 5%;
    position: absolute;
    top: 5%;
    transform: translateZ(-50px);
    transition: 0.3s;
    width: 90%;
    z-index: -1;
  }

  &--teeup {
    background: linear-gradient(to right, #649173, #dbd5a4);
  }

  &--wishlisted {
    background: linear-gradient(135deg, $purple 0%, $red 100%);
  }

  &--strive {
    background: linear-gradient(135deg, #bad405 0%, #8faa0e 40%);
  }

  &--stadium {
    background: linear-gradient(135deg, $grey 0%, $lightblue 100%);
  }

  &--overwatch {
    background: linear-gradient(135deg, $blue 0%, $lightblue 100%);
  }

  &--records {
    background: linear-gradient(135deg, $orange 0%, $yellow 100%);
  }

  &__image {
    filter: drop-shadow(0 0 25px rgba(51, 51, 51, 0.4));
    max-height: 90px;
    max-width: 90px;
    pointer-events: none;
    position: relative;
    transform: translateZ(50px);
    transition: transform 550ms ease-in-out;
    z-index: 2;
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
    padding: $gap / 2.5;
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
  }
}

.js-tilt-glare {
  z-index: 1;
}
</style>
