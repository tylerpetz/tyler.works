<script>
import ProjectListItem from './ProjectListItem'

export default {
  name: 'ProjectList',
  components: {
    ProjectListItem
  },
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
  <div class="mb-12">
    <slot name="header" />
    <section v-if="projects" class="my-8 grid grid-cols-1 gap-8">
      <template v-for="project in projects.slice(0, count)">
        <project-list-item :project="project" :key="project.sys.id" />
      </template>
    </section>
    <slot name="footer">
      <p>
        This isn't all of them, that'd be nuts. The rest can be found
        <nuxt-link
          class="text-theme-link hover:text-theme-link-hover"
          to="/work"
        >
          on my work page
        </nuxt-link> though.
      </p>
    </slot>
  </div>
</template>
