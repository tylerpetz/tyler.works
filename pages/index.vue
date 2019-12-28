<template>
  <div>
    <h1 class="heading">
      Looking for a
      <span>web developer?</span>
    </h1>
    <h2 class="subheading">
      <em>I am one of those.</em> Want Proof?
    </h2>
    <p class="list-item">
      I'm a
      <em>web developer</em> at
      <a
        href="http://www.booj.com"
        target="_blank"
        class="list-item__link"
        v-html="`booj`"
      /> in Denver, CO. If I weren't a web developer I'd have no business there.
    </p>
    <p class="list-item">
      I worked as a
      <em>web developer</em> at
      <nuxt-link
        to="/work/strive-media"
        class="list-item__link"
        v-html="`Strive Media`"
      />. Call them, they'll tell you.
    </p>
    <p class="list-item">
      I have also worked as a
      <em>web developer</em> for other companies, you can
      <nuxt-link
        to="/cv"
        class="list-item__link"
        v-html="`check my resume`"
      /> if you don't believe me.
    </p>
    <p class="list-item">
      I am currently
      <nuxt-link
        :to="{
          name: 'contact',
          params: {
            goTo: 'job'
          }
        }"
        class="list-item__link"
        v-html="`accepting new clients`"
      /> as a <em>web developer</em>. Seriously, why else would I be doing that?
    </p>
    <p class="list-item">
      I share my
      <em>web development code</em> that I have written on
      <a
        href="https://github.com/tylerpetz"
        target="_blank"
        class="list-item__link"
        v-html="`my github`"
      />. This is like a dead giveaway that I'm a web developer.
    </p>
    <ProjectList
      :projects="projects"
      :count="2"
    >
      <template
        slot="intro"
        v-html="projectIntro"
      />
    </ProjectList>
    <BlogList
      :intro="blogIntro"
      :post-count="2"
    />
    <TechList :intro="techListIntro" />
    <ContactForm :intro="contactIntro" />
  </div>
</template>

<script>
import BlogList from '../components/BlogList'
import ContactForm from '../components/ContactForm'
import ProjectList from '../components/ProjectList'
import TechList from '../components/TechList'

export default {
  name: 'Home',
  components: {
    BlogList,
    ContactForm,
    ProjectList,
    TechList
  },
  async fetch({ store, params }) {
    await Promise.all([
      store.dispatch('posts/getPosts', params.slug),
      store.dispatch('projects/getProjects', params.slug)
    ])
  },
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      blogIntro:
        'I have also written these blog posts on <em>web development</em>:',
      blogOutro: null,
      contactIntro:
        'Still not convinced? Fill out this form.<br/>The form gets sent to my email because I made it do that.',
      projectIntro: `I also <em>web developed</em> the projects that I have listed below:`,
      techListIntro:
        'Here is some of my favorite technology to use. The kinds of things that <em>web developers</em> would know about.'
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts.posts
    },
    projects() {
      return this.$store.state.projects.projects
    }
  }
}
</script>

<style type="scss" scoped>
.tag {
  margin: 0 3px;
}
</style>
