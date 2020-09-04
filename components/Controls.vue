<script>
export default {
  name: 'Controls',
  props: {
    links: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      scrollY: 0,
      themes: [
        '8008',
        '9009',
        'apollo',
        'bento',
        'dolch',
        'laser',
        'metropolis',
        'midnight',
        'milkshake',
        'oblivion',
        'wavez'
      ]
    }
  },
  mounted() {
    document.addEventListener('scroll', this.handleScroll)

    this.$once('hook:destroyed', () => {
      document.removeEventListener('scroll', this.handleScroll)
    })
  },
  computed: {
    controlsClasses() {
      if (this.scrollY < 200) return 'translate-x-32'
      return 'translate-x-0'
    }
  },
  methods: {
    handleScroll () {
      this.scrollY = window.scrollY
    },
    changeTheme(theme) {
      this.$store.commit('app/setActiveTheme', theme)
    },
  }
}
</script>

<template>
  <aside class="fixed bottom-0 right-0 mb-5 mr-4 transition-transform duration-150" >
    <ul class="flex-col items-center text-right mb-8 transform transition-transform duration-150 ease-in-out" :class="controlsClasses">
      <li v-for="link in links" :key="link.text" class="mb-4">
        <nuxt-link
          class="block relative text-theme-link hover:text-theme-link-hover text-xl"
          :to="link.url"
          exact
        >
          {{ link.text }}
        </nuxt-link>
      </li>
    </ul>
    <select @change="changeTheme($event.target.value)" :value="$store.state.app.theme" class="bg-accent-cap text-accent-legend rounded h-10 pr-1 pt-1 font-semibold">
      <option v-for="theme in themes" :key="theme" :value="theme">{{ theme }}</option>
    </select>
  </aside>
</template>

