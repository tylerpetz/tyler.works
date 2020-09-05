<script>
export default {
  name: 'default',
  head () {
    return {
      title: 'Tyler Petz - Web Developer',
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
          content: 'Tyler Petz - Web Developer'
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
          url: '/projects',
          text: 'Projects'
        },
        {
          url: '/hit-me-up',
          text: 'Hit Me Up'
        },
        {
          url: '/my-resume',
          text: 'Resumé'
        }
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
  <div
    class="tyler-styles bg-theme-bg text-theme-text font-body"
    :class="containerClass"
  >
    <the-cap :links="links" />
    <main class="px-4 md:px-8 min-h-screen">
      <div class="w-full max-w-screen-lg mx-auto">
        <transition name="page">
          <nuxt class="pt-40" />
        </transition>
      </div>
    </main>
    <the-pocket :links="links" />
    <the-shoes />
  </div>
</template>
