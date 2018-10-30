<template>
  <div id="header">
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
  </div>
</template>

<script>
import Headroom from "headroom.js";

export default {
  mounted() {
    console.log(window.getElementById('header'));
    //let header = new Headroom(document.getElementById('header'));
    /* header.init({
      tolerance: {
        up: 5,
        down: 0
      }
    }); */
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
