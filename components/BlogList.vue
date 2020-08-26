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
  <div class="mb-12">
    <slot name="header" />
    <section>
      <template v-for="post in posts.slice(0, count)">
        <article class="bg-theme-bg-l hover:bg-theme-bg-d transition-colors shadow-xl rounded p-8 duration-75 cursor-pointer mb-8" :key="post.sys.id">
          <h1 class="text-theme-link text-2xl">
            {{ post.fields.title }}
          </h1>
          <p class="text-theme-text text-shadow">
            {{ post.fields.description }}
          </p>
          <time class="blog-post__date">
            Published on:
            <span v-html="formatDate(post.sys.createdAt)" />
          </time>
        </article>
      </template>
    </section>
    <slot name="footer" />
  </div>
</template>
