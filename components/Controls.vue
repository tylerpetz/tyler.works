
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
      if (this.scrollY < 200) return 'translate-y-64'
      return 'translate-y-0'
    }
  },
  methods: {
    handleScroll () {
      this.scrollY = window.scrollY
    },
    changeTheme(theme) {
      console.log(theme)
      this.$store.commit('app/setActiveTheme', theme)
    },
  }
}
</script>

<template>
  <aside class="transform fixed bottom-0 right-0 mb-5 mr-4 transition-transform duration-150" :class="controlsClasses">
    <ul class="flex-col items-center text-right mb-8">
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
    <select @change="changeTheme($event.target.value)" class="bg-accent-cap text-accent-legend rounded p-1">
      <option selected disabled>Theme</option>
      <option v-for="theme in themes" :key="theme" :value="theme">{{ theme }}</option>
    </select>
  </aside>
</template>

