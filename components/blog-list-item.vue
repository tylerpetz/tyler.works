<script>
export default {
  name: 'blog-list-item',
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<template functional>
  <nuxt-link :to="`/on-writing/${props.post.fields.slug}`">
    <article
      :key="props.post.sys.id"
      class="transition-colors duration-75 mb-8 cursor-pointer"
    >
      <h1 class="text-theme-link text-xl">
        {{ props.post.fields.title }}
      </h1>
      <p class="mb-4">
        {{ props.post.fields.description }}
      </p>
    </article>
  </nuxt-link>
</template>
