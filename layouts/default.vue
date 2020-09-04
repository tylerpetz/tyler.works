<script>
import Controls from '../components/Controls'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  name: 'Default',
  components: {
    Controls,
    Header,
    Footer
  },
  head () {
    return {
      title: 'Tyler Petz - Front-End Web Developer',
      link: [
        {
          hid: 'favicon',
          rel: 'icon',
          type: 'image/svg+xml',
          href: this.themeFavicon
        },
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tyler Petz - Front-End Web Developer'
        },
      ]
    }
  },
  data () {
    return {
      fontsLoaded: false,
      formSubmitted: false,
      scrollY: 0,
      links: [
        {
          url: '/',
          text: 'Home'
        },
        {
          url: '/work',
          text: 'Work'
        },
        {
          url: '/contact',
          text: 'Contact'
        },
        // {
        //   url: '/cv',
        //   text: 'CV'
        // }
      ]
    }
  },
  computed: {
    containerClass () {
      const { theme = 'midnight' } = this.$store.state.app
      return `theme-${theme}`
    },
    themeFavicon() {
      const { theme = 'midnight' } = this.$store.state.app
      return `favicon-${theme}.svg`
    }
  },
}
</script>

<template>
  <div class="tyler-styles bg-theme-bg text-theme-text font-body" :class="containerClass">
    <Header :links="links" />
    <main class="px-8 min-h-screen">
      <div class="w-full max-w-screen-lg mx-auto">
        <transition name="page">
          <nuxt class="pt-40" />
        </transition>
      </div>
    </main>
    <Controls :links="links" />
    <Footer />
  </div>
</template>
