<template>
  <vue-headroom>
    <nav
      class="navigation container"
      role="navigation"
      aria-label="main navigation"
    >
      <nuxt-link
        class="navigation__link"
        to="/"
        exact
      >
        Home
      </nuxt-link>
      <nuxt-link
        class="navigation__link"
        to="/work"
      >
        Work
      </nuxt-link>
      <!--<nuxt-link
        class="navigation__link"
      to="/blog">Blog</nuxt-link>-->
      <!-- <nuxt-link class="navbar-item nav-item" to="/about">About</nuxt-link> -->
      <nuxt-link
        class="navigation__link"
        to="/contact"
      >
        Contact
      </nuxt-link>
      <nuxt-link
        class="navigation__link"
        to="/cv"
      >
        CV
      </nuxt-link>
    </nav>
    <header class="header">
      <div class="header__container container">
        <a
          class="header__link"
          @click="quickScroll"
        >Tyler Petz - A web developer.</a>
      </div>
    </header>
  </vue-headroom>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    quickScroll() {
      window.scrollTo({
        behavior: 'smooth',
        top: 0
      })
    }
  }
}
</script>

<style lang="scss">
.navigation {
  display: none;
  height: 100px;
  left: 0;
  max-width: 1024px + $gap;
  position: fixed;
  right: 0;
  top: 0;
  transform: translate3d(0, 0, 0);
  transition: transform 300ms ease;

  @include until($tablet) {
    padding: 0 ($gap / 5);
  }

  &__link {
    color: $blue;
    font-size: $size-4;
    margin-right: $gap;
    position: relative;
    transition: color 150ms ease-in-out;

    @include until($tablet) {
      font-size: $size-5;
      margin-right: $gap / 2;
    }

    &::before {
      content: 'Back To';
      font-size: 14px;
      left: 0;
      opacity: 0;
      pointer-events: none;
      position: absolute;
      text-align: center;
      text-transform: uppercase;
      top: -15px;
      transform: translate3d(0, 15px, 0);
      transition: opacity 150ms ease-in-out, transform 150ms ease;
      width: 100%;

      @include until($tablet) {
        font-size: 12px;
      }
    }

    &:hover,
    &:active {
      color: $green;
    }

    &.nuxt-link-active {
      color: $orange;
      position: relative;

      &::before {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }

    &.nuxt-link-exact-active {
      color: $green;
      text-decoration: none;

      &::before {
        opacity: 0;
        transform: translate3d(0, 15px, 0);
      }
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
      padding: 0;
    }
  }
}

.headroom {
  transform: none !important;

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
    z-index: 50;
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
