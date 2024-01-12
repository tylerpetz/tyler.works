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
          url: '/projects',
          text: 'Projects'
        },
        // {
        //   url: '/on-writing',
        //   text: 'Blog'
        // },
        {
          url: '/contact',
          text: 'Contact'
        },
        {
          url: '/cv',
          text: 'CV'
        },
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
      ],
      style: [
        {
          cssText: `body {
            /* alpha caps */
            --alpha-cap-h: 188;
            --alpha-cap-s: 56%;
            --alpha-cap-l: 17%;

            /* alpha legends */
            --alpha-legend-h: 104;
            --alpha-legend-s: 75%;
            --alpha-legend-l: 58%;

            /* mod caps */
            --mod-cap-h: 202;
            --mod-cap-s: 21%;
            --mod-cap-l: 17%;

            /* mod legends */
            --mod-legend-h: 104;
            --mod-legend-s: 75%;
            --mod-legend-l: 58%;

            /* accent caps */
            --accent-cap-h: 104;
            --accent-cap-s: 75%;
            --accent-cap-l: 58%;

            /* accent legends */
            --accent-legend-h: 202;
            --accent-legend-s: 21%;
            --accent-legend-l: 17%;

            /* theme backgrounds */
            --theme-bg-h: 193;
            --theme-bg-s: 100%;
            --theme-bg-l: 10%;

            /* theme text */
            --theme-text-h: 0;
            --theme-text-s: 0%;
            --theme-text-l: 95%;

            /* theme links/borders */
            --theme-link-h: 104;
            --theme-link-s: 75%;
            --theme-link-l: 58%;
          }`,
          type: 'text/css'
        }
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
      <div class="w-full max-w-screen-lg mx-auto pt-40 print:pt-0">
        <transition name="page">
          <nuxt />
        </transition>
      </div>
    </main>
    <the-pocket :links="links" />
    <the-shoes />
  </div>
</template>

<style>
html {
  @apply min-h-screen;
}

::selection {
  @apply text-theme-bg-d bg-theme-text-l;
}

.nuxt-link-active {
  @apply text-theme-link-press;
}

.nuxt-link-exact-active {
  @apply text-theme-text no-underline;
}

.page-enter-active,
.page-leave-active {
  @apply transition-all duration-300 ease-out;
}

.page-enter,
.page-leave-active {
  @apply opacity-0 transform-gpu;
  backface-visibility: hidden;
}

.content a {
  @apply text-theme-link hover:text-theme-link-hover;
}

@media print {
  .prose ul {
    @apply list-none;
  }

  .prose ul > li {
    @apply list-none ml-0 pl-0 mr-2;
  }

  .prose ul > li::before {
    @apply hidden;
  }
}
</style>
