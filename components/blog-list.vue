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
  methods: {
    formatDate (date) {
      const formatted = new Date(date)
      return (
        formatted.getMonth() +
        1 +
        '&middot;' +
        formatted.getDate() +
        '&middot;' +
        formatted.getFullYear()
      )
    }
  }
}
</script>

<template>
  <div>
    <slot name="header" />
    <section>
      <template v-for="post in posts.slice(0, count)">
        <article
          class="bg-theme-bg-l hover:bg-theme-bg-d transition-colors shadow-xl rounded p-8 duration-75 cursor-pointer mb-8"
          :key="post.sys.id"
        >
          <h1 class="text-theme-link text-2xl">
            {{ post.fields.title }}
          </h1>
          <p class="mb-4">
            {{ post.fields.description }}
          </p>
          <time class="text-xs">
            Published <span v-html="formatDate(post.sys.createdAt)" />
          </time>
        </article>
      </template>
    </section>
    <slot name="footer">
      <p>That actually is all of my blog posts. I do a lot more web development than blogging at the moment.</p>
    </slot>
  </div>
</template>
