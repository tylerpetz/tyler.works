<template>
  <div>
    <ProjectList :projects="projects">
      <template slot="intro">
        <span v-html="projectIntro" />
      </template>
      <template slot="outro">
        <span v-html="projectOutro" />
      </template>
    </ProjectList>
    <ContactForm :intro="contactIntro" />
  </div>
</template>

<script>
import Tilt from 'vanilla-tilt'
import ContactForm from '~/components/ContactForm'
import ProjectList from '~/components/ProjectList'

export default {
  name: 'Work',
  components: {
    ContactForm,
    ProjectList
  },
  async fetch({ store, params }) {
    await store.dispatch('projects/getProjects', params.slug)
  },
  data() {
    return {
      contactIntro: `Cool projects huh? Get in touch with me if you wanna talk shop.`,
      projectIntro: `Here are those projects I was talking about.`,
      projectOutro: `Those are my favorite ones, the rest are on <a href='https://github.com/tylerpetz' target='_blank' class='list-item__link' rel='noopener noreferrer'>my github</a>, peep it.`
    }
  },
  computed: {
    projects() {
      return this.$store.state.projects.projects
    }
  },
  mounted() {
    const fullTilt = document.querySelectorAll('.full-tilt')
    Tilt.init(fullTilt, {
      perspective: 1400,
      max: 20,
      speed: 200,
      reset: false
    })
  },
  head() {
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
