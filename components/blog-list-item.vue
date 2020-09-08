<script>
export default {
  name: 'blog-list-item',
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  },
  date(createdAt = '') {
    if (!createdAt) return false
    const formatted = new Date(createdAt)
    return {
      month: formatted.getMonth() + 1,
      day: formatted.getDate(),
      year: formatted.getFullYear(),
    }
  },
}
</script>

<template functional>
  <article
    :key="props.post.sys.id"
    class="bg-theme-bg-l hover:bg-theme-bg-d transition-colors shadow-xl rounded p-8 duration-75 cursor-pointer mb-8"
  >
    <h1 class="text-theme-link text-2xl">
      {{ props.post.fields.title }}
    </h1>
    <p class="mb-4">
      {{ props.post.fields.description }}
    </p>
    <time
      v-if="$options.date(props.post.sys.createdAt)"
      class="text-xs"
    >
      Published {{ $options.date(props.post.sys.createdAt).month }}&middot;{{ $options.date(props.post.sys.createdAt).day }}&middot;{{ $options.date(props.post.sys.createdAt).year }}
    </time>
    <time
      v-else
      class="text-xs"
    >
      Published Recently
    </time>
  </article>
</template>
