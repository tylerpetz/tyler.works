module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  globals: {
    Typekit: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:vue/recommended',
    'plugin:nuxt/recommended'

  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-v-html': 'off'
  }
}
