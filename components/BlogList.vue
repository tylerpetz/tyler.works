<script>
export default {
  name: 'BlogList',
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
  methods: {
    formatDate (date) {
      const formatted = new Date(date)
      return (
        formatted.getMonth() +
        1 +
        '-' +
        formatted.getDate() +
        '-' +
        formatted.getFullYear()
      )
    }
  }
}
</script>

<template>
  <section
    v-if="posts"
    class="mb-16"
  >
    <slot name="header" />
    <div
      v-for="(post, index) in posts.slice(0, count)"
      :key="index"
    >
      <article class="blog-post">
        <h1 class="blog-post__title">
          <nuxt-link :to="'/blog/' + post.fields.slug">
            {{ post.fields.title }}
          </nuxt-link>
        </h1>
        <time class="blog-post__date">
          Published on:
          <span v-html="formatDate(post.sys.createdAt)" />
        </time>
        <p class="blog-post__content">
          {{ post.fields.description }}
        </p>
      </article>
    </div>
    <slot name="footer" />
  </section>
</template>
