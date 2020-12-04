<script>
import createClient from '@/app/contentful'

export default {
  name: 'post',
  async asyncData({ $config, params }) {
    const client = createClient($config.spaceId, $config.accessToken)
    const res = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': params.slug
    })
    return {
      post: res.items[0]
    }
  },
  data() {
    return {
      post: {}
    }
  },
  computed: {
    isLoading () {
      return !Object.keys(this.post).length
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
  },
  head () {
    return {
      title: `Tyler Petz - ${this.post.fields.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.fields.description
        }
      ]
    }
  }
}
</script>

<template>
  <div>
    <article
      v-if="!isLoading"
      class="post"
    >
      <header class="post__header">
        <h1 class="post__title">
          {{ post.fields.title }}
        </h1>
        <time class="post__date">
          Published on:
          <span v-html="formatDate(post.fields.publishDate)" />
        </time>
        <time class="post__date">
          Last Updated:
          <span v-html="formatDate(post.fields.updatedAt)" />
        </time>
        <div class="post__border" />
      </header>
      <section
        v-interpolation
        class="prose lg:prose-xl"
        v-html="$md.render(post.fields.body)"
      />
    </article>
  </div>
</template>
