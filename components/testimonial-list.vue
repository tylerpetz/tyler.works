<script>
export default {
  name: 'testimonial-list',
  props: {
    testimonials: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<template>
  <section>
    <slot name="header" />
    <ul
      v-if="projects.length"
      class="my-8 grid grid-cols-1 lg:grid-cols-2 gap-8"
    >
      <div
        v-for="(testimonial, index) in testimonial"
        :key="index"
      /></div>
    </ul>
    <slot name="footer">
      <p>
        You can find some more on my
        <nuxt-link
          class="text-theme-link hover:text-theme-link-hover"
          to="/on-projects"
        >
          projects
        </nuxt-link> page.
      </p>
    </slot>
  </section>
</template>
