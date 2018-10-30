<template>
  <div>
    <h1 class="heading">Looking for a web developer?</h1>
    <h2 class="subheading"><em>I am one of those.</em> Want Proof?</h2>
    <p class="list-item">I currently am a <em>web developer</em> at <a 
      href="http://strivemedia.net" 
      target="_blank" 
      class="list-item__link">Strive Media</a>. Call my boss, he'll tell you.</p>
    <p class="list-item">I have also worked as a <em>web developer</em> for other companies, you can <nuxt-link 
      to="/resume" 
      class="list-item__link">check my resume</nuxt-link> if you don't believe me.</p>
    <p class="list-item">I share my <em>web development code</em> that I have written on <a 
      href="https://github.com/tylerpetz" 
      target="_blank" 
      class="list-item__link">my github</a>. This is like a dead giveaway that I'm a web developer.</p>
    <!-- Todo: Create a reason to include this line -->
    <!-- <p class="list-item">I am currently <a class="list-item__link">accepting new clients</a> as a <em>web developer</em>. Seriously, why else would I be doing that?</p> -->
    <ProjectList :post-count="2" />
    <BlogList :post-count="2" />
    <ContactForm
      :intro="contactIntro"
    />
  </div>
</template>

<script>
import BlogList from "../components/BlogList";
import ProjectList from "../components/ProjectList";
import ContactForm from "../components/ContactForm.vue";

export default {
  components: {
    BlogList,
    ProjectList,
    ContactForm
  },
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      projectIntro:
        "I also <em>web developed</em> the projects that I have listed below:",
      projectOutro: null,
      blogIntro:
        "I have also written these blog posts on <em>web development</em>:",
      blogOutro: null,
      contactIntro:
        "Still not convinced?<br/>Fill out this form. The form gets sent to my email because I made it do that."
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    },
    projects() {
      return this.$store.state.projects.projects;
    }
  },
  async fetch({ store, params }) {
    await Promise.all([
      store.dispatch("posts/getPosts", params.slug),
      store.dispatch("projects/getProjects", params.slug)
    ]);
  }
};
</script>
