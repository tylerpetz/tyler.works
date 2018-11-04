<template>
  <div>
    <ProjectList
      :intro="projectIntro"
      :outro="projectOutro" />
    <ContactForm :intro="contactIntro" />
  </div>
</template>

<script>
import ProjectList from "~/components/ProjectList.vue";
import ContactForm from "~/components/ContactForm.vue";
import Tilt from "vanilla-tilt";

export default {
  name: "Work",
  components: {
    ProjectList,
    ContactForm
  },
  data() {
    return {
      title: "Here are my projects.",
      projectIntro: `Here are those projects I was talking about.`,
      projectOutro: `Those are my favorite ones, the rest are on <a href='https://github.com/tylerpetz' target='_blank' class='list-item__link'>my github</a>, peep it.`,
      contactIntro: `Cool projects huh? Get in touch with me if you wanna talk shop.`
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.title
        }
      ]
    };
  },
  computed: {
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
