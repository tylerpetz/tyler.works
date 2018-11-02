global.File = typeof window === "undefined" ? Object : window.File;
const pkg = require("./package");

module.exports = {
  mode: "universal",

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: pkg.description
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      }
    ]
  },

  router: {
    middleware: "pages"
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#7fb800" },

  /*
  ** Global CSS
  */
  css: ["animate.css", { src: "~/assets/scss/main.scss", lang: "scss" }],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ["~/plugins/buefy.js", { src: "~/plugins/headroom.js", ssr: false }],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    "@nuxtjs/dotenv",
    "@nuxtjs/markdownit",
    "nuxt-sass-resources-loader"
  ],

  sassResources: ["~/assets/scss/**/*.scss"],

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
    /*
    ** You can extend webpack config here
    */
    vendor: ["headroom"],
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
      config.node = {
        fs: "empty"
      };
    }
  }
};
