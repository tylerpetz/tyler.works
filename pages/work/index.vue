<script>
import ProjectList from '~/components/ProjectList'

export default {
  name: 'Work',
  components: {
    ProjectList
  },
  async fetch ({ store, params }) {
    await store.dispatch('projects/getProjects', params.slug)
  },
  data () {
    return {
      contactIntro: 'Cool projects huh? Get in touch with me if you wanna talk shop.'
    }
  },
  computed: {
    projects () {
      return this.$store.state.projects.projects
    }
  },
  head () {
    return {
      title: 'Here are my projects.',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Here are my projects.'
        }
      ]
    }
  }
}
</script>

<template>
  <div class="pt-40">
    <ProjectList :projects="projects">
      <template slot="header">
        Here are those projects I was talking about.
      </template>
      <template slot="footer">
        Those are my favorite ones, the rest are on <a href="https://github.com/tylerpetz" target="_blank" class="list-item__link" rel="noopener noreferrer">my github</a>,
        peep it.
      </template>
    </ProjectList>
  </div>
</template>
