<template>
  <vue-headroom>
    <footer class="controls">
      <!-- TODO: make a "Search for Resume" that "finds" the resume page -->
      <b-tooltip
        v-if="pageName === 'cv'"
        label="Highlight Industry Buzzwords"
        position="is-left"
        type="is-danger"
      >
        <a
          :class="{ active: buzzwords }"
          class="controls__button dropdown__link"
          @click="toggleBuzzwords"
        >
          <i class="fas fa-bolt" />
        </a>
      </b-tooltip>
      <a class="controls__button dropdown__link scroll" @click="scrollUp">
        <i class="fas fa-arrow-up" />
      </a>
    </footer>
  </vue-headroom>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Controls',
  computed: {
    buzzwords: {
      get() {
        return this.$store.state.app.buzzwords
      },
      set() {
        this.toggleBuzzwords()
      }
    },
    darkMode: {
      get() {
        return this.$store.state.app.darkMode
      },
      set() {
        this.toggleDarkMode()
      }
    },
    pageName() {
      return this.$store.state.app.pageName
    }
  },
  methods: {
    ...mapMutations({
      toggleBuzzwords: 'app/toggleBuzzwords',
      toggleDarkMode: 'app/toggleDarkMode'
    }),
    scrollUp() {
      this.$buefy.toast.open({
        duration: 1200,
        message: 'Lazy mode active.',
        position: 'is-bottom',
        type: 'is-danger'
      })
      window.scrollTo({
        behavior: 'smooth',
        top: 0
      })
    }
  }
}
</script>

<style scoped lang="scss">
.controls {
  align-items: flex-end;
  bottom: 0;
  display: none;
  flex-direction: column;
  justify-content: flex-end;
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
    transform: all 150ms ease-in-out;
    transform: translate3d(6rem, 0, 0);
    transition: transform 300ms ease;
    width: 3rem;

    &:hover {
      background: darken($white, 15%);
      color: $pink;
    }

    &.active {
      color: $white;
      background: $purple;
    }
  }
}

.tooltip {
  margin-top: 1rem;

  &:after {
    right: calc(100% + 12px) !important;
  }

  &:before {
    right: calc(100% + 7px) !important;
  }
}

.scroll {
  margin-top: 1rem;
}

.headroom {
  .controls {
    display: flex;

    @include until($tablet) {
      display: none !important;
    }
  }

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
</style>
