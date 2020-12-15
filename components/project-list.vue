<script>
export default {
  name: 'project-list',
  props: {
    count: {
      type: Number,
      default: 10
    },
    projects: {
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
      <project-list-item
        v-for="project in projects.slice(0, count)"
        :key="project.sys.id"
        :project="project"
      />
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
