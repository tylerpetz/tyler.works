<script>
// import client from '@/api/contentful'
import BlogList from '@/components/BlogList'
import BragList from '@/components/BragList'
import ContactForm from '@/components/ContactForm'
import ProjectList from '@/components/ProjectList'
import TechList from '@/components/TechList'

export default {
  name: 'Home',
  components: {
    BlogList,
    BragList,
    ContactForm,
    ProjectList,
    TechList
  },
  async fetch ({ store, params }) {
    // const res = await client.getEntries({
    //   content_type: 'homepage'
    // })
    // console.log(res.items[0].fields)
    await Promise.all([
      store.dispatch('posts/getPosts', params.slug),
      store.dispatch('projects/getProjects', params.slug)
    ])
  },
  data () {
    return {
      blogIntro:
        'I have also written these blog posts on <em>web development</em>:',
      contactIntro:
        'Still not convinced? Fill out this form.<br/>The form gets sent to my email because I made it do that.',
      techListIntro:
        'Here is some of my favorite technology to use. The kinds of things that <em>web developers</em> would know about.'
    }
  },
  computed: {
    posts () {
      return this.$store.state.posts.posts
    },
    projects () {
      return this.$store.state.projects.projects
    },
    listItems () {
      return [
        'I\'m a <em>web developer</em>'
      ]
    }
  }
}
</script>

<template>
  <div>
    <h1 class="text-2xl md:text-4xl">
      Looking for a web developer?
    </h1>
    <h2 class="text-xl md:text-3xl text-theme-link mt-2 mb-4 leading-snug border-b-2 border-theme-border inline-block">
      I am one of those.
    </h2>
    <h3 class="text-lg md:text-2xl mb-16">
      Oh, you want some proof?
    </h3>
    <BragList />
    <ProjectList :projects="projects" :count="2">
      <h1 slot="header">
        I also <em>web developed</em> the projects that I have listed below:
      </h1>
    </ProjectList>
    <BlogList :posts="posts" :count="2">
      <h1 slot="header">
        I have also written these blog posts on <em>web development</em>:
      </h1>
    </BlogList>
    <TechList :intro="techListIntro" />
    <ContactForm :intro="contactIntro" />
  </div>
</template>

<style type="scss" scoped>
.tag {
  margin: 0 3px;
}
</style>
