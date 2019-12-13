<template>
  <div>
    <BlogList :post-count="10" />
    <ContactForm :intro="contactIntro" />
  </div>
</template>

<script>
import BlogList from '~/components/BlogList'
import ContactForm from '~/components/ContactForm'

export default {
  name: 'Blog',
  components: {
    BlogList,
    ContactForm
  },
  data() {
    return {
      title: 'Here is my blog.',
      contactIntro:
        'Want to talk some more about that stuff that I blogged about?'
    }
  },
  head() {
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
  },
  computed: {
    posts() {
      return this.$store.state.posts.posts
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('posts/getPosts', params.slug)
  }
}
</script>
