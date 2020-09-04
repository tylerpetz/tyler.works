<script>
export default {
  name: 'Header',
  props: {
    links: {
      type: Array,
      required: true,
    }
  },
  methods: {
    quickScroll () {
      window.scrollTo({
        behavior: 'smooth',
        top: 0
      })
    }
  }
}
</script>

<template>
  <header class="w-full py-8 px-4 md:px-8 absolute top-0 left-0 right-0 z-10">
    <nav
      role="navigation"
      aria-label="main navigation"
    >
      <ul class="max-w-screen-lg mx-auto flex flex-row items-center space-x-6 sm:space-x-8">
        <li v-for="link in links" :key="link.text">
          <nuxt-link
            class="block relative text-theme-link hover:text-theme-link-hover sm:text-xl font-bold"
            :to="link.url"
            exact
          >
            {{ link.text }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
.nuxt-link-active {
  @apply text-theme-link-press;
}

.nuxt-link-exact-active {
  @apply text-theme-text;
  text-decoration: none;
}
</style>
