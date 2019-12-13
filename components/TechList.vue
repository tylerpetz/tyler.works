<template>
  <section class="tech">
    <h1 v-if="intro" v-html="intro" class="list-item section-heading" />
    <div class="columns is-gapless is-mobile is-multiline">
      <div class="column is-half-mobile">
        <ul>
          <li class="list-item">Vue.js</li>
          <li class="list-item">Nuxt.js</li>
          <li class="list-item">Bulma</li>
          <li class="list-item">Netlify</li>
          <li class="list-item">Contentful</li>
        </ul>
      </div>
      <div class="column is-half-mobile">
        <ul>
          <li class="list-item">Babel/ES6</li>
          <li class="list-item">SASS</li>
          <li class="list-item">Webpack</li>
          <li class="list-item">Yarn</li>
          <li class="list-item">Gulp</li>
        </ul>
      </div>
      <div class="column is-half-mobile">
        <ul>
          <li class="list-item">Laravel</li>
          <li class="list-item">Wordpress</li>
          <li class="list-item">Vagrant</li>
          <li class="list-item">CircleCI</li>
          <li class="list-item">Cloudflare</li>
        </ul>
      </div>
      <div class="column is-half-mobile">
        <ul>
          <li class="list-item">Google Tag Manager</li>
          <li class="list-item">Google Analytics</li>
          <li class="list-item">Google Maps API</li>
          <li class="list-item">AWS</li>
          <li class="list-item">Mailchimp</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TechList',
  props: {
    intro: {
      type: String,
      default: ''
    }
  }
}
</script>
