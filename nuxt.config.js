global.File = typeof window === "undefined" ? Object : window.File;
require("dotenv").config();
const contentful = require("contentful");
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
      },
      {
        rel: "stylesheet",
        href: "https://use.typekit.net/mdz6hax.css"
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

  css: ["./assets/scss/main.scss"],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~/plugins/buefy.js",
    "~/plugins/headroom.js",
    "~/plugins/contentful"
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/dotenv",
    "@nuxtjs/markdownit",
    "nuxt-sass-resources-loader"
  ],

  sassResources: ["./assets/scss/main.scss"],

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
    extractCSS: {
      allChunks: true
    },
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
  },

  generate: {
    routes: () => {
      const client = contentful.createClient({
        space: process.env.CTF_SPACE_ID,
        accessToken: process.env.CTF_CD_ACCESS_TOKEN
      });

      return Promise.all([
        client.getEntries({
          content_type: "blogPost"
        }),
        client.getEntries({
          content_type: "project"
        })
      ]).then(([blogs, projects]) => {
        console.table(blogs, projects);
        return [
          ...blogs.items.map(entry => `/blog/${entry.fields.slug}`),
          ...projects.items.map(entry => `/work/${entry.fields.slug}`)
        ];
      });
    }
  },
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CD_ACCESS_TOKEN: process.env.CTF_CD_ACCESS_TOKEN
  }
};
