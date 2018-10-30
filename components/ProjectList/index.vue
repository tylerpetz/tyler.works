<template>
  <section class="projects">
    <h1
      v-if="intro"
      class="list-item section-heading"
      v-html="intro"/>
    <h1
      v-else
      class="list-item section-heading">Here are those projects I was talking about.</h1>
    <div
      v-if="projects"
      class="columns is-multiline">
      <div
        v-for="(project, index) in projects.slice(0, projectCount)"
        :key="index">
        <div class="card-container">
          <nuxt-link 
            :to="'/work/' + project.fields.slug"
            class="full-tilt card">
            <img
              :src="project.fields.heroImage"
              :alt="project.fields.title"
              class="card__image">
          </nuxt-link>
          <div class="card-description">
            <h2 class="card-description__title">{{ project.fields.name }}</h2>
            <p class="card-description__details">{{ project.fields.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>No Projects</div>
    <p
      v-if="outro"
      class="list-item"
      v-html="outro"/>
  </section>
</template>

<script>
import Tilt from "vanilla-tilt";

export default {
  props: {
    intro: {
      type: String,
      default: ""
    },
    outro: {
      type: String,
      default: `This isn't all of them, that'd be nuts. The rest can be found <nuxt-link class="list-item__link" to="/work">here</nuxt-link> though.`
    },
    projectCount: {
      type: Number,
      default: 10
    }
  },
  data: () => {
    return {
      projectsOld: [
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
        return this.projectsOld;
      }
    },
    projects() {
      return this.$store.state.projects.projects;
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
  },
  async fetch({ store, params }) {
    await store.dispatch("projects/getProjects", params.slug);
  }
};
</script>
