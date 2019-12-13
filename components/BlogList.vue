<template>
  <section v-if="posts" class="blog">
    <h1 v-html="intro" class="list-item section-heading" />
    <div v-for="(post, index) in posts.slice(0, postCount)" :key="index">
      <article class="blog-post">
        <h2 class="blog-post__title">
          <nuxt-link :to="'/blog/' + post.fields.slug">{{
            post.fields.title
          }}</nuxt-link>
        </h2>
        <time class="blog-post__date">
          Published on:
          <span v-html="formatDate(post.sys.createdAt)" />
        </time>
        <p class="blog-post__content">{{ post.fields.description }}</p>
      </article>
    </div>
    <p v-html="outro" class="list-item" />
  </section>
</template>

<script>
export default {
  name: 'BlogList',
  props: {
    intro: {
      type: String,
      default: 'Here is some stuff that I wrote about <em>web development</em>.'
    },
    outro: {
      type: String,
      default: ''
    },
    postCount: {
      type: Number,
      default: 10
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts.posts
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('posts/getPosts', params.slug)
  },
  methods: {
    formatDate(date) {
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
