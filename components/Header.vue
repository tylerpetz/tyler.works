<template>
  <headroom>
    <nav
      class="navigation container"
      role="navigation"
      aria-label="main navigation">
      <nuxt-link
        class="navigation__link"
        to="/"
        exact>Home</nuxt-link>
      <nuxt-link
        class="navigation__link"
        to="/work">Work</nuxt-link>
      <nuxt-link
        class="navigation__link"
        to="/blog">Blog</nuxt-link>
      <!-- <nuxt-link class="navbar-item nav-item" to="/about">About</nuxt-link> -->
      <nuxt-link
        class="navigation__link"
        to="/contact">Contact</nuxt-link>
    </nav>
    <header class="header">
      <div class="header__container container">
        <a
          class="header__link"
          @click="quickScroll">Tyler Petz - A web developer.</a>
      </div>
    </header>
  </headroom>
</template>

<script>
import { headroom } from "vue-headroom";
headroom.computed.style = () => "";

export default {
  components: {
    headroom
  },
  methods: {
    quickScroll() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style lang="scss">
body.project-page {
  padding-top: 300px;

  .navigation {
    &__link {
      color: $white;
      text-shadow: 1px 1px 20px rgba(51, 51, 51, 0.4);
    }
  }
}
</style>
