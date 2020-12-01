<script>
import createClient from '@/app/contentful'

export default {
  name: 'project',
  async asyncData({ $config, params }) {
    const client = createClient($config.spaceId, $config.accessToken)
    const res = await client.getEntries({
      content_type: 'project',
      'fields.slug': params.slug
    })
    return {
      project: res.items[0]
    }
  },
  data() {
    return {
      project: {}
    }
  },
  computed: {
    isLoading () {
      return !Object.keys(this.project).length
    }
  },
  methods: {
    getImageRatio (size) {
      if (size === 'desktop') {
        return 'is-4by3'
      } else if (size === 'mobile') {
        return 'is-9by16'
      }
    },
    imageModal (url, size) {
      const sizeClass = this.getImageRatio(size)
      this.$modal.open({
        content: `<figure class="image ${sizeClass}">
          <img src="${url}">
        </figure>`
      })
    }
  },
  head () {
    return {
      title: `Tyler Petz - ${this.project.fields.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.project.fields.description
        }
      ]
    }
  }
}
</script>

<template>
  <div v-if="!isLoading">
    <article>
      <header class="prose prose-theme-text flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 class="border-theme-link border-b-4">
          {{ project.fields.title }}
        </h1>
      </header>
      <!-- <section
        class="prose prose-theme-text mb-8"
      >
        <h2>Gallery</h2>
      </section>
      <section
        class="prose prose-theme-text mb-8"
      >
        <h2>Tech Stack</h2>
        <ul>
          <li>Vue</li>
          <li>Netlify</li>
        </ul>
      </section> -->
      <section
        v-interpolation
        class="prose prose-theme-text mb-8"
        v-html="$md.render(project.fields.body)"
      />
      <footer class="flex flex-row items-center mb-12">
        <a
          v-if="project.fields.repoUrl"
          :href="project.fields.repoUrl"
          class="rounded-sm text-lg px-3 pb-1 pt-2 bg-theme-link text-theme-bg mr-4 no-underline hover:bg-theme-link-hover active:bg-theme-link-press transition-colors duration-100"
          target="_blank"
        >View Code</a>
        <a
          v-if="project.fields.projectUrl"
          :href="project.fields.projectUrl"
          class="rounded-sm text-lg px-3 pb-1 pt-2 bg-theme-link text-theme-bg hover:bg-theme-link-hover active:bg-theme-link-press transition-colors duration-100"
          target="_blank"
        >View Website</a>
      </footer>
    </article>
  </div>
</template>
