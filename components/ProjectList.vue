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
    <section v-if="projects" class="my-8 grid grid-cols-2 gap-8">
      <template v-for="(project, index) in projects.slice(0, count)">
        <project-list-item :project="project" :key="index" />
      </template>
    </section>
    <slot name="footer">
      <p>
        This isn't all of them, that'd be nuts. The rest can be found
        <nuxt-link
          class=""
          to="/work"
        >
          on my work page
        </nuxt-link> though.
      </p>
    </slot>
  </div>
</template>
