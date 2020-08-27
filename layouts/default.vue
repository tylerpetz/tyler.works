<script>
import { mapMutations } from 'vuex'
// import Controls from '../components/Controls'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  name: 'Default',
  components: {
    // Controls,
    Header,
    Footer
  },
  data () {
    return {
      fontsLoaded: false,
      formSubmitted: false
    }
  },
  mounted () {
    this.fixLinks()
    // this.loadWebfonts();

    this.$root.$on('submit', (form) => {
      this.handleSubmit(form)
    })

    document.addEventListener('scroll', this.handleScroll)

    this.$once('hook:destroyed', () => {
      document.removeEventListener('scroll', this.handleScroll)
    })
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
    handleScroll () {
      // Your scroll handling here
      console.log(window.scrollY)
    }
  },
}
</script>

<template>
  <div class="tyler-styles bg-theme-bg text-theme-text">
    <main class="px-8">
      <Header />
      <div class="w-full max-w-screen-lg mx-auto">
        <transition name="page">
          <nuxt />
        </transition>
      </div>
    </main>
    <!-- <Controls /> -->
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
