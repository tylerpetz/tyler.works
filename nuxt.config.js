import client from './api/contentful'
import pkg from './package'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.description,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,400;0,700;1,400;1,700&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css',
        crossorigin: 'anonymous',
        integrity:
          'sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#462da0' },

  /*
   ** Global CSS
   */
  css: ['~/assets/scss/main.scss', '~/assets/themes.css'],

  /*
   ** Variables for use in Scoped SCSS
   */
  styleResources: {
    scss: ['~/assets/scss/main.scss']
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/buefy', '~/plugins/headroom'],

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
    '@nuxtjs/style-resources'
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
    // analyze: true,
    loaders: {
      scss: { sourceMap: false }
    },
    extend (config, ctx) {
      config.node = {
        fs: 'empty'
      }
    }
  },

  /*
   ** Generate routes serverside
   */
  generate: {
    routes: () => {
      return Promise.all([
        client.getEntries({
          content_type: 'blogPost'
        }),
        client.getEntries({
          content_type: 'project'
        })
      ]).then(([blogs, projects]) => {
        return [
          ...blogs.items.map(entry => `/blog/${entry.fields.slug}`),
          ...projects.items.map(entry => `/work/${entry.fields.slug}`)
        ]
      })
    }
  },

  /*
   ** router config, don't abstract it to that one file
   */
  router: {
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  }
}
