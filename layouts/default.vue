<template>
  <div>
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
    <div class="container">
      <div class="columns">
        <div class="column is-12-desktop">
          <transition
            name="page"
            mode="out-in">
            <nuxt />
          </transition>
        </div>
      </div>
    </div>
    <Controls />
  </div>
</template>

<script>
import Controls from "../components/Controls.vue";
import Headroom from "headroom.js";

export default {
  components: {
    Controls
  },
  mounted() {
    this.$root.$on("submit", form => {
      this.handleSubmit(form);
    });

    let header = new Headroom(document.getElementById("header"));
    header.init({
      tolerance: {
        up: 5,
        down: 0
      }
    });
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit(form) {
      console.log(form);
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": "contact-form",
          name: form.name,
          email: form.email,
          message: form.message
        })
      })
        .then(() => {
          console.log("thanks");
        })
        .catch(() => {
          console.log("aight");
        });
    }
  }
};
</script>

<style>
@import url("https://use.typekit.net/mdz6hax.css");
</style>
