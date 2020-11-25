import createClient from './app/contentful'

export default {
  target: 'static',

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
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

  publicRuntimeConfig: {
    spaceId: process.env.CTF_SPACE_ID,
    accessToken: process.env.CTF_CD_ACCESS_TOKEN
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
   ** Nuxt.js plugins
   */
  plugins: [
    '~/app/hotkeys.js',
    '~/app/contentful.js'
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
    },
    build: {
      extend(config, ctx) {
        if (ctx.isDev) {
          config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
        }
      }
    }
  },

  /*
   ** Generate routes serverside
   */
  generate: {
    routes: () => {
      const client = createClient(process.env.CTF_SPACE_ID, process.env.CTF_CD_ACCESS_TOKEN)
      return Promise.all([
        client.getEntries({
          content_type: 'blogPost'
        }),
        client.getEntries({
          content_type: 'project'
        })
      ]).then(([writing, projects]) => {
        return [
          ...writing.items.map(entry => `/on-writing/${entry.fields.slug}`),
          ...projects.items.map(entry => `/on-projects/${entry.fields.slug}`)
        ]
      })
    }
  }
}
