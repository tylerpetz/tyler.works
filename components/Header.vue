<template>
  <header>
    <nav
      class="w-full pt-4 pb-16"
      role="navigation"
      aria-label="main navigation"
    >
      <ul class="max-w-screen-lg mx-auto flex flex-row items-center">
        <li v-for="link in links" :key="link.text" class="mr-8">
          <nuxt-link
            class="block relative text-theme-link hover:text-theme-link-hover text-xl"
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

<script>
export default {
  name: 'Header',
  data () {
    return {
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

<style lang="scss">
.nuxt-link-active {
  @apply text-theme-link-press;
}

.nuxt-link-exact-active {
  @apply text-theme-text;
  text-decoration: none;
}
</style>
