<script>
export default {
  name: 'blog-list',
  props: {
    count: {
      type: Number,
      default: 10
    },
    posts: {
      type: Array,
      default: () => []
    }
  },
}
</script>

<template>
  <section>
    <slot name="header" />
    <ul
      v-if="posts.length"
      class="my-8 grid grid-cols-1 gap-8"
    >
      <blog-list-item
        v-for="post in posts.slice(0, count)"
        :key="post.sys.id"
        :post="post"
      />
    </ul>
    <slot name="footer">
      <p>That's all my posts. I assure you, I plan on writing more.</p>
    </slot>
  </section>
</template>
