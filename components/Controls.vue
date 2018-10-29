<template>
  <footer class="controls">
    <!--<b-dropdown position="is-top-left">
      <a class="controls__button dropdown__link" slot="trigger">
        <i class="fas fa-cog"></i>
      </a>
      <b-dropdown-item custom paddingless>
        <form action="">
          <div class="modal-card">
            <section class="modal-card-body">
              <div class="field">
                <b-switch :value="false">
                  Highlight industry buzzwords
                </b-switch>
              </div>
              <div class="field">
                <b-switch :value="false" type="is-dark">
                  Hacker Mode
                </b-switch>
              </div>
            </section>
          </div>
        </form>
      </b-dropdown-item>
    </b-dropdown>-->
    <a 
      class="controls__button dropdown__link" 
      @click="noScroll"><i class="fas fa-arrow-up"/></a>
  </footer>
</template>

<script>
import Headroom from "headroom.js";

export default {
  name: "Controls",
  mounted() {
    let footer = new Headroom(this.$el);
    footer.init({
      tolerance: {
        up: 5,
        down: 0
      }
    });
  },
  methods: {
    noScroll() {
      this.$toast.open({
        duration: 1200,
        message: "Lazy mode active.",
        position: "is-bottom",
        type: "is-danger"
      });
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style scoped lang="scss">
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
</style>
