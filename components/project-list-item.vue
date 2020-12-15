<script>
export default {
  name: 'project-list-item',
  props: {
    project: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<template functional>
  <li>
    <nuxt-link
      :to="`/on-projects/${props.project.fields.slug}`"
      :title="props.project.fields.title"
    >
      <article class="bg-theme-bg-l hover:bg-theme-bg-d transition-colors shadow-xl rounded p-8 duration-75">
        <h1 class="text-theme-link text-2xl mb-1">
          {{ props.project.fields.title }}
        </h1>
        <p>
          {{ props.project.fields.description }}
        </p>
      </article>
    </nuxt-link>
  </li>
</template>
