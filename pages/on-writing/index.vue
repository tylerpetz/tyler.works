<script>
export default {
  name: 'posts',
  async fetch ({ store, params }) {
    await store.dispatch('posts/getPosts', params.slug)
  },
  data () {
    return {
      title: 'Here is my blog.',
      contactIntro:
        'Want to talk some more about that stuff that I blogged about?'
    }
  },
  computed: {
    posts () {
      return this.$store.state.posts.posts
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.title
        }
      ]
    }
  }
}
</script>

<template>
  <blog-list :count="10" />
</template>
