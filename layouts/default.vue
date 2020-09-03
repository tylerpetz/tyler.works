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
  head () {
    return {
      title: 'Tyler Petz - Front-End Web Developer',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tyler Petz - Front-End Web Developer'
        }
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
        // {
        //   url: '/contact',
        //   text: 'Contact'
        // },
        // {
        //   url: '/cv',
        //   text: 'CV'
        // }
      ]
    }
  },
  mounted () {
    this.fixLinks()

    this.$root.$on('submit', (form) => {
      this.handleSubmit(form)
    })
  },
  computed: {
    containerClass () {
      const { theme = 'midnight' } = this.$store.state.app
      return `theme-${theme}`
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
  },
}
</script>

<template>
  <div class="tyler-styles bg-theme-bg text-theme-text font-body" :class="containerClass">
    <Header :links="links" />
    <main class="px-8 min-h-screen">
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
