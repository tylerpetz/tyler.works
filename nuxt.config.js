import createClient from './utils/contentful'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      {
        hid: 'stylesheet',
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,400;0,700;1,400;1,700&display=swap'
      },
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: 'var(--theme-color-border)' },

  /*
   ** Auto import components
   */
  components: true,

  /*
   ** Global CSS
   */
  css: ['~/assets/themes.css', '~/assets/styles.scss'],

  /*
   ** Nuxt.js build modules
   */
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/markdownit',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg-sprite',
    'nuxt-interpolation'
  ],

  /*
   ** Processes markdown
   */
  markdownit: {
    injected: true
  },

  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    loaders: {
      scss: { sourceMap: false }
    }
  },

  /*
   ** Generate routes serverside
   */
  generate: {
    routes: () => {
      const client = createClient()
      return Promise.all([
        client.getEntries({
          content_type: 'blogPost'
        }),
        client.getEntries({
          content_type: 'project'
        })
      ]).then(([writing, projects]) => {
        return [
          ...writing.items.map(entry => `/writing/${entry.fields.slug}`),
          ...projects.items.map(entry => `/projects/${entry.fields.slug}`)
        ]
      })
    }
  },

  /*
   ** router config, don't abstract it to that one file
   */
  router: {
    scrollBehavior () {
      return { x: 0, y: 0 }
    }
  }
}
