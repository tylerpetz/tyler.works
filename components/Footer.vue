<template>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="column is-12-mobile footer__left">
          <h2 class="footer__title">Tyler Petz</h2>
          <p
            @mouseover="copyWrong"
            @mouseout="copyRight"
            v-html="copyText"
            class="footer__details"
          />
        </div>
        <div class="column is-12-mobile footer__right">
          <a
            class="footer__button"
            href="https://github.com/tylerpetz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Tyler's Github"
          >
            <i class="fab fa-github" />
          </a>
          <a
            class="footer__button"
            href="https://www.linkedin.com/in/tyler-petz-11734818/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Tyler's LinkedIn"
          >
            <i class="fab fa-linkedin" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      copyText: '&copy; 2018'
    }
  },
  methods: {
    copyRight() {
      this.copyText = `&copy; 2018`
    },
    copyWrong() {
      this.copyText = '&amp;copy; 2018'
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  border: 0;
  margin-bottom: 0;
  outline: 0;
  padding: $gap / 2;
  transform-style: preserve-3d;

  @include until($tablet) {
    padding: $gap / 2.5;
  }

  &__left {
    flex-grow: 1;
  }

  &__right {
    align-items: center;
    display: flex;
    flex-grow: 0;
    justify-content: center;

    @include until($tablet) {
      flex-grow: 1;
    }
  }

  &__title {
    color: $blue;
    font-size: $size-3;
    opacity: 0;
    opacity: 1;
    transform: translate3d(-80px, 0, 0);
    transform: translate3d(0, 0, 0);
    transition: opacity 100ms ease-out, transform 450ms ease;

    @include until($tablet) {
      font-size: $size-4;
      opacity: 1;
      text-align: center;
      transform: translate3d(0, 0, 0);
    }
  }

  &__details {
    color: $blue;
    font-size: $size-5;
    opacity: 0;
    opacity: 1;
    transform: translate3d(-50px, 0, 0);
    transform: translate3d(0, 0, 0);
    transition: opacity 150ms ease-out, transform 300ms ease;

    @include until($tablet) {
      opacity: 1;
      text-align: center;
      transform: translate3d(0, 0, 0);
    }
  }

  &__button {
    color: $blue;
    font-size: $size-2;
    margin: 0 5px;
    text-align: right;
    transition: all 150ms ease;

    .icon {
      padding-right: 10px;
    }

    &:hover {
      color: $pink;
      text-shadow: 1px 1px 20px rgba(51, 51, 51, 0.4);
    }

    @include until($tablet) {
      text-align: center;
    }
  }
}
</style>
