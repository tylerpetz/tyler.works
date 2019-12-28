module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  globals: {
    Typekit: true,
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'plugin:vue/recommended',
    'plugin:nuxt/recommended',

  ],
  plugins: [
    'prettier'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-v-html': 'off'
  }
}
