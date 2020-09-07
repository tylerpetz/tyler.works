<script>
export default {
  name: 'blog-list-item',
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    date() {
      if (!this.post.sys.createdAt) return false
      const formatted = new Date(this.post.sys.createdAt)
      return {
        month: formatted.getMonth() + 1,
        day: formatted.getDate(),
        year: formatted.getFullYear(),
      }
    },
  },
}
</script>

<template>
  <article
    :key="post.sys.id"
    class="bg-theme-bg-l hover:bg-theme-bg-d transition-colors shadow-xl rounded p-8 duration-75 cursor-pointer mb-8"
  >
    <h1 class="text-theme-link text-2xl">
      {{ post.fields.title }}
    </h1>
    <p class="mb-4">
      {{ post.fields.description }}
    </p>
    <time
      v-if="date"
      class="text-xs"
    >
      Published {{ date.month }}&middot;{{ date.day }}&middot;{{ date.year }}
    </time>
    <time
      v-else
      class="text-xs"
    >
      Published Recently
    </time>
  </article>
</template>
