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
  <nuxt-link
    :to="`/on-projects/${props.project.fields.slug}`"
    :title="props.project.fields.title"
  >
    <article class="bg-theme-bg-l hover:bg-theme-bg-d transition-colors shadow-xl rounded p-8 duration-75 cursor-pointer">
      <h1 class="text-theme-link text-2xl">
        {{ props.project.fields.title }}
      </h1>
      <p>
        {{ props.project.fields.description }}
      </p>
    </article>
  </nuxt-link>
</template>
