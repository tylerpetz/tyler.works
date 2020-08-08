import client from './api/contentful'
import pkg from './package'

export default {
  mode: 'universal',

  /*
   ** dotenv config
   */
  publicRuntimeConfig: {
    contentfulSpaceId: process.env.CTF_SPACE_ID,
    contentfulAccessToken: process.env.CTF_CD_ACCESS_TOKEN
  },

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
        rel: 'preload',
        href: 'https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,400;0,700;1,400;1,700&display=swap',
        as: 'style'
      },
      {
        rel: 'preload',
        href:
          'https://use.fontawesome.com/releases/v5.6.1/webfonts/fa-solid-900.woff2',
        as: 'font',
        crossorigin: true
      },
      {
        rel: 'preload',
        href:
          'https://use.fontawesome.com/releases/v5.6.1/webfonts/fa-brands-400.woff2',
        as: 'font',
        crossorigin: true
      },
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
    // Doc: https://tailwindcss.nuxtjs.org/setup/
    '@nuxtjs/tailwindcss',
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/markdownit',
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/pwa',
      {
        meta: {
          ogHost: 'https://tyler.works'
        }
      }
    ]
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
      scss: { sourceMap: false },
    },
    extend(config, ctx) {
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

  router: {
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 }
    },
  }
}
