<template>
  <div>
    <Header />
    <div class="container">
      <div class="columns">
        <div class="column is-12-desktop">
          <transition name="router-anim">
            <nuxt />
          </transition>
        </div>
      </div>
    </div>
    <Controls />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Controls from "../components/Controls.vue";

export default {
  components: {
    Header,
    Controls
  },
  mounted() {
    this.$root.$on("submit", form => {
      this.handleSubmit(form);
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

<style lang="scss">
@import "~bulma/sass/utilities/_all";
@import "~bulma/sass/base/_all";
@import "~bulma/sass/elements/box.sass";
@import "~bulma/sass/elements/button.sass";
@import "~bulma/sass/elements/container.sass";
@import "~bulma/sass/elements/content.sass";
@import "~bulma/sass/elements/form.sass";
@import "~bulma/sass/elements/icon.sass";
@import "~bulma/sass/elements/progress.sass";
@import "~bulma/sass/elements/other.sass";
@import "~bulma/sass/grid/_all";
@import "~buefy/src/scss/utils/all";

.navigation {
  height: 100px;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transform: translate3d(0, -100px, 0);
  transform: translate3d(0, 0, 0);
  transition: transform 300ms ease;
  display: none;

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

html,
body {
  font-family: $family-secondary;
  letter-spacing: 0.025rem;
}

body {
  padding-top: 100px;

  @include until($tablet) {
    padding-top: 60px;
  }
}

::selection {
  background: $green;
  color: $blue;
}

.container {
  max-width: 1024px;
  width: 100%;

  @include until($desktop) {
    padding: 0 ($gap / 1.5);
  }
}

.background {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 40vh;
  background: linear-gradient(to right, #649173, #dbd5a4);
}

.heading {
  color: $blue;
  font-size: $size-1;
  margin-top: 40px;

  @include until($tablet) {
    font-size: $size-3;
  }
}

.subheading {
  color: $blue;
  font-size: $size-2;
  margin-bottom: $gap;

  @include until($tablet) {
    font-size: $size-4;
  }
}

.list-item {
  font-size: $size-5;
  margin-bottom: $gap / 4;
  margin-top: $gap / 4;

  &__link {
    color: $green;
    text-decoration: underline;

    &:hover {
      color: $orange;
      text-decoration: none;
    }
  }
}

.section-heading {
  color: $blue;
  font-size: $size-3;
  font-weight: bold;
  line-height: 1;
  margin-bottom: $gap / 2;
  margin-top: $gap;

  @include until($tablet) {
    font-size: $size-4;
  }
}

@include until($tablet) {
  .columns:last-child {
    margin-bottom: -1rem;
  }

  .columns {
    margin-left: -1rem;
    margin-right: -1rem;
    margin-top: -1rem;
  }

  .column {
    padding: 1rem;
  }
}

.line-break {
  @include until($tablet) {
    display: none !important;
  }
}

.blog {
  margin-bottom: $gap;
}

.blog-post {
  margin-bottom: $gap / 2;

  &__title {
    color: $pink;
    font-size: $size-3;
    font-style: italic;

    a {
      color: $pink;
    }

    &:hover {
      text-decoration: underline;
    }

    @include until($tablet) {
      font-size: $size-4;
    }
  }

  &__date {
    color: darken($white, 30%);
    font-size: $size-6;
    font-style: italic;
  }

  &__content {
    color: $blue;
    font-size: $size-5;
    margin: ($gap / 4) auto;
  }
}

.js-tilt-glare {
  z-index: 1;
}

.controls {
  bottom: 0;
  display: none;
  padding-bottom: 2rem;
  padding-right: 2rem;
  position: fixed;
  right: 0;
  width: 5rem;
  z-index: 99;

  &__button {
    align-items: center;
    background: darken($white, 10%);
    border-radius: 1.5rem;
    color: $purple;
    display: flex;
    font-size: $size-6;
    height: 3rem;
    justify-content: center;
    margin-top: 1rem;
    transform: all 150ms ease-in-out;
    transform: translate3d(6rem, 0, 0);
    transition: transform 300ms ease;
    width: 3rem;

    &:hover {
      background: darken($white, 15%);
      color: $pink;
    }
  }

  .dropdown {
    &.is-active {
      color: $pink;

      .dropdown__link {
        background: $pink;
        color: $white;
      }
    }
  }

  &.headroom {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;

    .dropdown {
      transform: translate3d(0, 0, 0);
      transition: all 300ms ease;
    }

    &--not-top {
      .controls__button {
        transform: translate3d(0, 0, 0);
      }
    }

    &--top {
      .dropdown {
        transform: translate3d(400px, 0, 0);
      }
    }
  }
}

.modal-card {
  width: 260px;
}

.tee-up-fore-autism {
  background: linear-gradient(to right, #649173, #dbd5a4);
}

.wishlisted {
  background: linear-gradient(135deg, $purple 0%, $red 100%);
}

.strive-media {
  background: linear-gradient(135deg, #464646 0%, $grey 100%);
}

.the-stadium-gallery {
  background: linear-gradient(135deg, $blue 0%, $lightblue 100%);
}

.overwatch {
  background: linear-gradient(135deg, $blue 0%, $lightblue 100%);
}

.records {
  background: linear-gradient(135deg, $orange 0%, $yellow 100%);
}

.router-anim-enter-active {
  animation: coming 0.5s;
  animation-delay: 0.5s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going 0.5s;
}

@keyframes going {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-50px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
