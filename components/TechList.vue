<script>
export default {
  name: 'TechList',
  data() {
    return {
      favorites: [
        'Vue',
        'Nuxt',
        'TailwindCSS',
        'Babel/ES6+',
        'Jest',
        'Yarn',
        'Webpack',
        'Sass',
        'VS Code',
        'ZSH',
        'GitHub',
        'Netlify',
        'Contentful',
        'Figma',
        'Google Analytics',
        'AWS',
      ]
    }
  }
}
</script>

<template>
  <section>
    <slot name="header" />
    <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <li
        v-for="favorite in favorites"
        :key="favorite"
        class="cursor-default md:text-lg flex justify-center items-center py-2 rounded bg-mod-cap text-mod-legend hover:bg-accent-cap hover:text-accent-legend transition-colors duration-75"
      >
        {{ favorite }}
      </li>
    </ul>
  </section>
</template>



