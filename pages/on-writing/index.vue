<script>
import createClient from '@/app/contentful'

export default {
  name: 'posts',
   async asyncData({ $config }) {
    const client = createClient($config.spaceId, $config.accessToken)
    const res = await client.getEntries({
      content_type: 'blogPost',
      order: '-sys.createdAt'
    })
    return {
      posts: res.items
    }
  },
  data () {
    return {
      title: 'Here is my blog.',
      contactIntro:
        'Want to talk some more about that stuff that I blogged about?',
      posts: []
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
  <blog-list
    :posts="posts"
    :count="10"
  />
</template>
