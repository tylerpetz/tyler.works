<script>
import createClient from '@/app/contentful'

export default {
  name: 'home',
  asyncData({ $config }) {
    const client = createClient($config.spaceId, $config.accessToken)
    return Promise.all([
      client.getEntries({
        content_type: 'blogPost',
        order: '-sys.createdAt'
      }),
      client.getEntries({
        content_type: 'project',
        order: '-sys.createdAt'
      }),
      client.getEntries({
        content_type: 'brag',
        order: 'sys.createdAt'
      })
    ]).then(([posts,projects,brags]) => {
      return {
        posts: posts.items,
        projects: projects.items,
        brags: brags.items,
      }
    })
  },
  data() {
    return {
      brags: [],
      posts: [],
      projects: [],
    }
  },
}
</script>

<template>
  <div>
    <div class="flex flex-col items-center pb-32">
      <h1 class="text-center text-xl sm:text-2xl md:text-4xl">
        Are you looking for a <strong class="whitespace-nowrap">web developer?</strong>
      </h1>
      <h2 class="text-center rounded-sm text-lg sm:text-2xl md:text-3xl mt-4 mb-6 bg-accent-cap text-accent-legend pt-1 px-3">
        That's cool, I am one.
      </h2>
      <h3 class="text-center sm:text-lg md:text-2xl">
        Keep reading if you don't believe me.
      </h3>
    </div>
    <brag-list :brags="brags" />
    <base-divider />
    <project-list
      :projects="projects"
      :count="2"
    >
      <h1
        slot="header"
        class="text-theme-text-d text-lg md:text-2xl mb-6"
      >
        I also <em>web developed</em> the projects that I have listed below:
      </h1>
    </project-list>
    <base-divider />
    <!-- <blog-list
      :posts="posts"
      :count="2"
    >
      <h1
        slot="header"
        class="text-theme-text-d text-lg md:text-2xl mb-6"
      >
        I have also written these blog posts on <em>web development</em>:
      </h1>
    </blog-list>
    <base-divider /> -->
    <tech-list>
      <h1
        slot="header"
        class="text-theme-text-d text-lg md:text-2xl mb-6"
      >
        Here is some of my favorite tech and platforms that I use. The kinds of things that <em>web developers</em> would know about.
      </h1>
    </tech-list>
    <base-divider />
    <contact-info />
  </div>
</template>
