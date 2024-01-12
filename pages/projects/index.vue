<script>
import createClient from '@/app/contentful'

export default {
  name: 'projects',
  async asyncData({ $config }) {
    const client = createClient($config.spaceId, $config.accessToken)
    const res = await client.getEntries({
      content_type: 'project',
      order: '-sys.createdAt'
    })
    return {
      projects: res.items
    }
  },
  data () {
    return {
      contactIntro: 'Cool projects huh? Get in touch with me if you wanna talk shop.',
      projects: []
    }
  },
  head () {
    return {
      title: 'Here are my projects.',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Here are my projects.'
        }
      ]
    }
  }
}
</script>

<template>
  <project-list :projects="projects">
    <template slot="header">
      Here are those projects I was talking about.
    </template>
    <template slot="footer">
      Those are my favorite ones, the rest are on <a
        href="https://github.com/tylerpetz"
        target="_blank"
        rel="noopener noreferrer"
        class="underline"
      >my github</a>,
      peep it.
    </template>
  </project-list>
</template>
