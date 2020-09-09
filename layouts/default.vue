<script>
export default {
  name: 'default',
  data () {
    return {
      fontsLoaded: false,
      formSubmitted: false,
      scrollY: 0,
      links: [
        {
          url: '/',
          text: 'TP'
        },
        {
          url: '/on-projects',
          text: 'Projects'
        },
        // {
        //   url: '/on-writing',
        //   text: 'Projects'
        // },
        {
          url: '/on-networking',
          text: 'Contact'
        },
        {
          url: '/for-people',
          text: 'CV'
        },
        // {
        //   url: '/but-he-is-still-a-person',
        //   text: 'About'
        // },
      ]
    }
  },
  computed: {
    containerClass () {
      return `theme-${this.$store.state.app.theme}`
    },
    themeFavicon() {
      return `favicon-${this.$store.state.app.theme}.svg`
    },
    keymap() {
      return {
        'shift+up': this.prevTheme,
        'shift+down': this.nextTheme,
      }
    }
  },
  methods: {
    nextTheme() {
      this.$store.commit('app/SET_NEXT_THEME')
    },
    prevTheme() {
      this.$store.commit('app/SET_PREV_THEME')
    }
  },
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
}
</script>

<template>
  <div
    v-hotkey="keymap"
    class="bg-theme-bg text-theme-text font-body transition-colors duration-500 ease-in-out"
    :class="containerClass"
  >
    <the-cap :links="links" />
    <main class="px-4 md:px-8 min-h-screen">
      <div class="w-full max-w-screen-lg mx-auto pt-40">
        <transition name="page">
          <nuxt />
        </transition>
      </div>
    </main>
    <the-pocket :links="links" />
    <the-shoes />
  </div>
</template>
