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
  <li>
    <nuxt-link :to="`/on-writing/${props.post.fields.slug}`">
      <article class="bg-theme-bg-l hover:bg-theme-bg-d transition-colors shadow-xl rounded p-8 duration-75">
        <h1 class="text-theme-link text-2xl mb-1">
          {{ props.post.fields.title }}
        </h1>
        <p>
          {{ props.post.fields.description }}
        </p>
      </article>
    </nuxt-link>
  </li>
</template>
