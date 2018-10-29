<template>
  <div id="header">
    <nav
      class="navigation container"
      role="navigation"
      aria-label="main navigation">
      <router-link
        class="navigation__link"
        to="/"
        exact>Home</router-link>
      <router-link
        class="navigation__link"
        to="/work">Work</router-link>
      <router-link
        class="navigation__link"
        to="/blog">Blog</router-link>
      <!-- <router-link class="navbar-item nav-item" to="/about">About</router-link> -->
      <router-link
        class="navigation__link"
        to="/contact">Contact</router-link>
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
  name: "Header",
  mounted() {
    let header = new Headroom(document.getElementById("header"));
    header.init({
      tolerance: {
        up: 5,
        down: 0
      }
    });
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

<style scoped lang="scss">
.navigation {
  align-items: center;
  display: none;
  height: 100px;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transform: translate3d(0, -100px, 0);
  z-index: 2;

  &__link {
    color: $blue;
    font-size: $size-4;
    padding-right: $gap / 1.5;
    transition: color 150ms ease-in-out;

    &:hover,
    &:active {
      color: $orange !important;
    }

    &.router-link-active {
      color: $green !important;
    }
  }
}

.header {
  background: $blue;
  display: none;
  height: 50px;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 99;

  &__container {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  &__link {
    color: $white;
    font-size: $size-4;
    transform: color 150ms ease-in-out;

    &:hover {
      color: $lightblue;
    }
  }
}

.headroom {
  display: flex;
  transition: all 350ms ease;

  .header {
    display: flex;
    transform: translate3d(0, -50px, 0);
    transition: transform 300ms ease;
  }

  .navigation {
    display: flex;
    transform: translate3d(0, 0, 0);
    transition: transform 300ms ease;
  }

  &--not-top {
    .navigation {
      transform: translate3d(0, -100px, 0);
    }

    .header {
      transform: translate3d(0, 0, 0);
    }
  }
}
</style>
