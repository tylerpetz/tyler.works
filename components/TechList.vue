<script>
export default {
  name: 'TechList',
  data() {
    return {
      favorites: ['Vue', 'Nuxt', 'TailwindCSS', 'Netlify', 'Contentful', 'Babel/ES6+', 'SASS', 'Webpack', 'Lerna', 'Github', 'CircleCI', 'Google Tag Manager', 'Google Analytics', 'AWS', 'Mailchimp']
    }
  }
}
</script>

<template>
  <section>
    <slot name="header" />
    <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <li v-for="favorite in favorites" :key="favorite" class="text-theme-text-l md:text-lg">{{ favorite }}</li>
    </ul>
  </section>
</template>
