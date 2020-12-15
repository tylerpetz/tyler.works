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
  <base-content-full v-if="!isLoading">
    <template slot="header">
      {{ post.fields.title }}
    </template>
    <section
      v-interpolation
      v-html="$md.render(post.fields.body)"
    />
    <template slot="footer">
      <footer class="prose group-hover:prose-theme-text prose-sm">
        <time class="text-theme-text-d">
          Published on:
          <span v-html="formatDate(post.fields.publishDate)" />
        </time>
        <time
          v-if="post.fields.updatedAt"
        >
          Last Updated:
          <span v-html="formatDate(post.fields.updatedAt)" />
        </time>
      </footer>
    </template>
  </base-content-full>
</template>
