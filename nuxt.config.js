import * as contentful from 'contentful'
import pkg from './package'
require('dotenv').config()

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
        rel: 'preload',
        href: 'https://use.typekit.net/mdz6hax.css',
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
        href: 'https://use.typekit.net/mdz6hax.css'
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
  css: ['~/assets/scss/main.scss'],

  /*
   ** Variables for use in Scoped SCSS
   */
  styleResources: {
    scss: ['~/assets/scss/main.scss']
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/buefy', '~/plugins/headroom', '~/plugins/contentful'],

  /*
   ** Nuxt.js build modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/dotenv-module#setup
    '@nuxtjs/dotenv'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
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
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

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
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.node = {
        fs: 'empty'
      }
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  /*
   ** Generate routes serverside
   */
  generate: {
    routes: () => {
      const client = contentful.createClient({
        space: process.env.CTF_SPACE_ID,
        accessToken: process.env.CTF_CD_ACCESS_TOKEN
      })

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
   ** Contentful config
   */
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CD_ACCESS_TOKEN: process.env.CTF_CD_ACCESS_TOKEN
  }
}
