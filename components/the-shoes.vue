<script>
export default {
  name: 'the-shoes',
  data() {
    return {
      links: [
        {
          name: 'Github',
          url: 'https://github.com/tylerpetz',
          icon: 'fab fa-github'
        },
        {
          name: 'Linkedin',
          url: 'https://www.linkedin.com/in/tyler-petz-11734818/',
          icon: 'fab fa-linkedin'
        }
      ]
    }
  }
}
</script>

<template>
  <footer class="h-20 bg-mod-cap text-mod-legend flex items-center">
    <div class="w-full px-4 md:px-8 max-w-screen-lg mx-auto flex justify-between items-center">
      <p class="text-sm sm:text-base md:text-lg">
        Tyler Petz <span class="hidden sm:inline">(web developer)</span> &copy; {{ new Date().getFullYear() }}
      </p>
      <ul class="flex flex-row space-x-4 text-lg md:text-2xl">
        <li
          v-for="link in links"
          :key="link.name"
        >
          <a
            class="text-mod-legend hover:text-theme-link transition-colors duration-75"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`Tyler's ${link.name}`"
          >
            <i :class="link.icon" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>
