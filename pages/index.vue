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
  computed: {
    posts () {
      return this.$store.state.posts.posts
    },
    projects () {
      return this.$store.state.projects.projects
    },
  }
}
</script>

<template>
  <div>
    <h1 class="text-2xl md:text-4xl">
      Are you looking for a web developer?
    </h1>
    <h2 class="rounded-sm text-2xl md:text-4xl bg-accent-cap text-accent-legend my-4 pt-1 p-2 inline-block">
      I am one of those.
    </h2>
    <h3 class="text-theme-text-d text-lg md:text-2xl mb-16">
      Oh, you want some proof?
    </h3>
    <brag-list />
    <hr class="my-16 border-b border-theme-border" />
    <project-list :projects="projects" :count="2">
      <h1 slot="header" class="text-theme-text-d text-lg md:text-2xl mb-6">
        I also <em>web developed</em> the projects that I have listed below:
      </h1>
    </project-list>
    <hr class="my-16 border-b border-theme-border" />
    <blog-list :posts="posts" :count="2">
      <h1 slot="header" class="text-theme-text-d text-lg md:text-2xl mb-6">
        I have also written these blog posts on <em>web development</em>:
      </h1>
    </blog-list>
    <hr class="my-16 border-b border-theme-border" />
    <tech-list>
      <h1 slot="header" class="text-theme-text-d text-lg md:text-2xl mb-6">
        Here is some of my favorite technology to use. The kinds of things that <em>web developers</em> would know about.
      </h1>
    </tech-list>
    <hr class="my-16 border-b border-theme-border" />
    <!-- <contact-form>
      <h1 slot="header" class="text-lg md:text-2xl mb-6">
        Still not convinced? Behold my greatest feat yet, the contact form.
      </h1>
    </contact-form> -->
  </div>
</template>

<style type="scss" scoped>
.tag {
  margin: 0 3px;
}
</style>
