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

<style lang="scss" scoped>
.navigation {
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

    @include until($tablet) {
      font-size: $size-5;
      padding-right: $gap / 2.5;
    }
  }
}

.header {
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

    @include until($tablet) {
      font-size: $size-5;
    }
  }
}

.headroom {
  display: flex;
  transition: all 350ms ease;

  .header {
    background: $blue;
    display: flex;
    height: 50px;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    transform: translate3d(0, -50px, 0);
    transition: transform 300ms ease;
    z-index: 99;
  }

  .navigation {
    align-items: center;
    display: flex;
    height: 100px;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    transform: translate3d(0, -100px, 0);
    transform: translate3d(0, 0, 0);
    transition: transform 300ms ease;
    z-index: 2;
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
