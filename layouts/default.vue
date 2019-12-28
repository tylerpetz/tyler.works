<template>
  <div>
    <Header />
    <div class="container">
      <div class="columns">
        <div class="column is-12-desktop">
          <transition name="page">
            <nuxt />
          </transition>
        </div>
      </div>
    </div>
    <Controls />
    <Footer />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Controls from '../components/Controls'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  name: 'Default',
  components: {
    Controls,
    Header,
    Footer
  },
  data() {
    return {
      fontsLoaded: false,
      formSubmitted: false
    }
  },
  mounted() {
    this.fixLinks()
    // this.loadWebfonts();

    this.$root.$on('submit', form => {
      this.handleSubmit(form)
    })
  },
  methods: {
    ...mapMutations({
      goodForm: 'app/formSubmitted',
      badForm: 'app/formError'
    }),
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    fixLinks() {
      const links = document.querySelectorAll(
        'a[href]:not([href^=mailto]):not([class^=addfollow])'
      )

      for (let i = 0; i < links.length; i++) {
        if (links[i].hostname !== window.location.hostname) {
          links[i].target = '_blank'
          links[i].rel = 'noopener nofollow noreferrer'
        }
      }
    },
    handleSubmit(form) {
      if (form.botcheck) {
        this.badForm('Failed bot check')
      } else {
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: this.encode({
            'form-name': 'contact-form',
            name: form.name,
            email: form.email,
            message: form.message
          })
        })
          .then(() => {
            this.goodForm()
          })
          .catch(e => {
            this.badForm(e)
          })
      }
    },
    loadWebfonts() {
      try {
        Typekit.load({
          loading: () => {
            // Javascript to execute when fonts start loading
          },
          active: () => {
            this.fontsLoaded = true
          },
          inactive: () => {
            this.fontsLoaded = true
          }
        })
      } catch (e) {
        console.log('Fonts got messed up')
      }
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/base/_all';
@import '~bulma/sass/components/modal.sass';
@import '~bulma/sass/elements/box.sass';
@import '~bulma/sass/elements/button.sass';
@import '~bulma/sass/elements/container.sass';
@import '~bulma/sass/elements/content.sass';
@import '~bulma/sass/elements/icon.sass';
@import '~bulma/sass/elements/image.sass';
@import '~bulma/sass/elements/progress.sass';
@import '~bulma/sass/elements/table.sass';
@import '~bulma/sass/elements/other.sass';
@import '~bulma/sass/form/_all';
@import '~bulma/sass/grid/_all';
@import '~buefy/src/scss/utils/_all';
@import '~buefy/src/scss/components/_icon';
@import '~buefy/src/scss/components/_loading';
@import '~buefy/src/scss/components/_message';
@import '~buefy/src/scss/components/_notices';
@import '~buefy/src/scss/components/_radio';
@import '~buefy/src/scss/components/_select';
@import '~buefy/src/scss/components/_switch';
@import '~buefy/src/scss/components/_tooltip';

html.is-clipped {
  overflow-y: scroll !important;
}

html,
body {
  background-color: $white;
  font-family: $family-secondary;
  letter-spacing: 0.025rem;
}

html {
  min-height: 100vh;
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

  @include until($tablet) {
    padding: 0 ($gap / 2.5);
  }
}

.heading {
  color: $blue;
  font-size: $size-1;
  margin-top: 40px;

  span {
    color: $green;
  }

  @include until($tablet) {
    font-size: $size-3;

    span {
      white-space: nowrap;
    }
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
  color: $blue;
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

.tee-up-fore-autism {
  background: linear-gradient(135deg, #649173, #dbd5a4);
}

.wishlisted {
  background: linear-gradient(135deg, $purple, $red);
}

.strive-media {
  background: linear-gradient(135deg, #464646, $grey);
}

.the-stadium-gallery {
  background: linear-gradient(135deg, $blue, $lightblue);
}

.overwatch {
  background: linear-gradient(135deg, $blue, $lightblue);
}

.tylers-top-records-of-2017 {
  background: linear-gradient(135deg, #4d9de0, #ed393a);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.35s ease;
}

.page-enter,
.page-leave-active {
  backface-visibility: hidden;
  opacity: 0;
  transform: translateZ(0);
}

.dropdown {
  position: relative;

  &.is-active {
    color: $pink;

    .dropdown__link {
      background: $pink;
      color: $white;
    }
  }

  .dropdown-menu {
    position: absolute;
    transition: box-shadow 250ms ease;
    border: 1px solid #ddd;
    box-shadow: 0 10px 35px -10px rgba(51, 51, 51, 0.3),
      0 25px 50px 0 rgba(51, 51, 51, 0.15);

    .dropdown-content {
      background: $white;
      color: $blue;
      padding: 1rem;
      width: 300px;
    }
  }
}
</style>
