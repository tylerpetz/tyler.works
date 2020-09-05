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
  <div>
    <slot name="header" />
    <section
      v-if="projects"
      class="my-8 grid grid-cols-1 lg:grid-cols-2 gap-8"
    >
      <template v-for="project in projects.slice(0, count)">
        <project-list-item
          :project="project"
          :key="project.sys.id"
        />
      </template>
    </section>
    <slot name="footer">
      <p>
        This isn't all of them, it seemed like a good design decision to just show a couple to save some scrolling.<br>
        You can find some more on
        <nuxt-link
          class="text-theme-link hover:text-theme-link-hover"
          to="/projects"
        >
          on my work page
        </nuxt-link>.
      </p>
    </slot>
  </div>
</template>
