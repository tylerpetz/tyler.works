<script>
import { mapMutations } from 'vuex'
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
        {
          url: '/cv',
          text: 'CV'
        }
      ]
    }
  },
  mounted () {
    this.fixLinks()
    // this.loadWebfonts();

    this.$root.$on('submit', (form) => {
      this.handleSubmit(form)
    })
  },
  computed: {
    containerClass () {
      // purgeable css classes
      const { theme = '' } = this.$store.state.app
      if (theme === '8008') return 'theme-8008'
      if (theme === '9009') return 'theme-9009'
      if (theme === 'dolch') return 'theme-dolch'
      if (theme === 'milkshake') return 'theme-milkshake'
      if (theme === 'oblivion') return 'theme-oblivion'
      if (theme === 'laser') return 'theme-laser'
      if (theme === 'bento') return 'theme-bento'
      if (theme === 'metropolis') return 'theme-metropolis'
      if (theme === 'wavez') return 'theme-wavez'

      return 'theme-metropolis'
    }
  },
  methods: {
    ...mapMutations({
      goodForm: 'app/formSubmitted',
      badForm: 'app/formError'
    }),
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    fixLinks () {
      const links = document.querySelectorAll(
        'a[href]:not([href^=mailto]):not([class^=addfollow])'
      )

      for (let i = 0; i < links.length; i++) {
        if (links[i].hostname !== window.location.hostname) {
          links[i].target = '_blank'
          links[i].rel = 'noopener nofollow noreferrer'
        }
      }
    },
    handleSubmit (form) {
      if (form.botcheck) {
        this.badForm('Failed bot check')
      } else {
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: this.encode({
            'form-name': 'contact-form',
            name: form.name,
            email: form.email,
            message: form.message
          })
        })
          .then(() => {
            this.goodForm()
          })
          .catch((e) => {
            this.badForm(e)
          })
      }
    },
    loadWebfonts () {
      try {
        Typekit.load({
          loading: () => {
            // Javascript to execute when fonts start loading
          },
          active: () => {
            this.fontsLoaded = true
          },
          inactive: () => {
            this.fontsLoaded = true
          }
        })
      } catch (e) {
        console.log('Fonts got messed up')
      }
    },
  },
}
</script>

<template>
  <div class="tyler-styles bg-theme-bg text-theme-text" :class="containerClass">
    <main class="px-8">
      <Header :links="links" />
      <div class="w-full max-w-screen-lg mx-auto">
        <transition name="page">
          <nuxt />
        </transition>
      </div>
    </main>
    <Controls :links="links" />
    <Footer />
  </div>
</template>


<style lang="scss">
html.is-clipped {
  overflow-y: scroll !important;
}

html {
  min-height: 100vh;
}

::selection {
  @apply text-theme-bg-d bg-theme-text-l;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.35s ease;
}

.page-enter,
.page-leave-active {
  backface-visibility: hidden;
  opacity: 0;
  transform: translateZ(0);
}
</style>
