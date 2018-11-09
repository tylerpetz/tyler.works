<template>
  <section class="contact">
    <h1
      v-if="intro"
      class="list-item section-heading"
      v-html="intro"/>
    <h1
      v-else
      class="list-item section-heading">Fill out this form. The form gets sent to my email because I made it do that.</h1>
    <div class="columns">
      <div class="column is-12-mobile is-8-tablet">
        <form
          name="contact-form"
          data-netlify="true"
          @submit.prevent="submitForm">
          <input
            type="hidden"
            name="form-name"
            value="contact-form" >
          <div class="field">
            <label class="label is-large">What is your name?</label>
            <div class="control has-icons-right">
              <input
                name="name"
                class="input is-large"
                type="text"
                placeholder="My name is Tyler Petz"
                @input="ev => form.name = ev.target.value">
              <span class="icon is-large is-right">
                <i class="fas fa-meh"/>
              </span>
            </div>
          </div>
          <div class="field">
            <label class="label is-large">What is your e-mail address?</label>
            <div class="control has-icons-right">
              <input
                name="email"
                class="input is-large"
                type="email"
                placeholder="My email address is me@tyler.works"
                @input="ev => form.email = ev.target.value">
              <span class="icon is-large is-right">
                <i class="fas fa-meh"/>
              </span>
            </div>
          </div>
          <div class="field">
            <label class="label is-large">Do you believe me now?</label>
            <div class="control">
              <div class="select is-large">
                <select
                  v-model="selected"
                  placeholder="Well..."
                  @change="onSelect()">
                  <option
                    disabled
                    selected
                    style="display: none;"
                    value="">Well...</option>
                  <option value="job">No further convincing neccessary, I'd like to hire you.</option>
                  <option value="friend">Yes of course, and I'd like to become life long friends.</option>
                  <option value="troll">I'm still skeptical, certain things aren't adding up.</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field field--last">
            <label
              class="label is-large"
              v-html="selectedOption.label"/>
            <div class="control">
              <textarea
                :placeholder="selectedOption.placeholder"
                name="message"
                class="textarea is-large"
                @input="ev => form.message = ev.target.value"/>
            </div>
          </div>
          <div class="button-wrapper">
            <button
              v-if="selected"
              :class="selected"
              :disabled="!isFormFilled"
              type="submit"
              class="button is-large"
              v-html="selectedOption.button"
            />
            <button
              v-else
              :disabled="!isFormFilled"
              type="submit"
              class="button is-large is-info">Send Email</button>
            <p class="helper">Not so fast, partner. You haven't even finished filling out the form.</p>
          </div>
        </form>
      </div>
      <div class="column is-12-mobile is-4-tablet">
        <div class="card-container">
          <div class="full-tilt card image"/>
          <div class="card-description">
            <img
              v-if="selected"
              :src="selectedOption.image"
              class="card__image">
            <img
              v-else
              class="card__image"
              src="/tyler.png">
            <h2 class="card-description__title">Tyler Petz</h2>
            <p class="card-description__details">A web developer.</p>
            <a 
              class="card-description__button" 
              href="https://github.com/tylerpetz" 
              target="_blank">
              GitHub
            </a>
            <a 
              class="card-description__button" 
              href="https://www.linkedin.com/in/tyler-petz-11734818/" 
              target="_blank">
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    intro: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: false,
      selectedOptionFields: {
        label: "Got somethin' to say?",
        placeholder: "Hey dude."
      },
      optionFields: {
        job: {
          label: "Sweet. Tell me a little bit about your project or company.",
          button: `Click to send email.<span class="line-break">&nbsp;You're making the right choice!</span>`,
          placeholder: "The job pays $...",
          image: "/coolguy.jpg"
        },
        friend: {
          label:
            "First, a lil' compatibility test. What's your favorite album?",
          button: `Click to send email.<span class="line-break">&nbsp;Can't wait to hang!</span>`,
          placeholder: `Mine is "There's Nothing Wrong with Love" by Built to Spill.`,
          image: "/graffiti.jpg"
        },
        troll: {
          label: "Wow, okay. What will it take to convince you?",
          button: `Click to send email.<span class="line-break">&nbsp;Show me what you got.</span>`,
          placeholder: "Go easy on me.",
          image: "/loiter.jpg"
        }
      },
      errors: [],
      formFilled: false,
      form: {
        name: "",
        email: "",
        message: ""
      }
    };
  },
  computed: {
    selectedOption() {
      return this.selectedOptionFields;
    },
    isFormFilled() {
      if (this.form.name && this.form.email && this.form.message) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    onSelect() {
      this.selectedOptionFields = this.optionFields[this.selected];
    },
    submitForm() {
      this.$root.$emit("submit", this.form);
    }
  }
};
</script>

<style lang="scss">
.contact {
  margin-bottom: $gap;

  .field {
    &--last {
      margin-top: $gap / 2;
    }

    .select {
      width: 100%;

      select {
        width: 100%;
      }
    }
  }

  select,
  input,
  textarea {
    &:hover {
      border-color: $green;
    }
  }

  figcaption {
    position: absolute;
  }

  .label {
    color: $green;

    @include until($tablet) {
      font-size: $size-5;
    }
  }

  .button {
    width: 100%;
    background: linear-gradient(135deg, $green 0%, $lightblue 100%);
    color: $white;

    &[disabled] {
      & + .helper {
        color: $red;
        display: block;
        opacity: 0;
        transition: opacity 150ms ease;
      }

      &:hover {
        & + .helper {
          opacity: 1;
        }
      }
    }
  }

  .helper {
    display: none;
  }

  @include until($tablet) {
    .control,
    .icon,
    input,
    select,
    label {
      .is-large {
        font-size: $size-5 !important;
      }
    }

    input {
      padding-left: calc(0.625em - 1px) !important;
    }

    .icon {
      display: none;
    }
  }

  .card-container {
    padding-top: 48%;
    position: relative;
  }

  .card {
    background-color: $green;
    border: 0;
    display: flex;
    height: 390px;
    justify-content: center;
    margin-bottom: 0;
    outline: 0;
    padding-top: $gap;
    transform-style: preserve-3d;
    background: linear-gradient(160deg, $blue 0%, $purple 100%);
    box-shadow: 0 20px 70px -10px rgba(51, 51, 51, 0.3),
      0 50px 100px 0 rgba(51, 51, 51, 0.15);

    &__image {
      box-shadow: 0 0 25px rgba(51, 51, 51, 0.4);
      pointer-events: none;
      position: relative;
      z-index: 2;
      height: 100%;
      width: 100%;
    }
  }

  .card-description {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: $gap / 2;
    text-shadow: 1px 1px 20px rgba(51, 51, 51, 0.4);

    @include until($tablet) {
      padding: $gap / 2.5;
    }

    &__title {
      font-size: $size-3;
      color: $white;
      transform: translate3d(-80px, 0, 0);
      opacity: 0;
      transition: opacity 100ms ease-out, transform 450ms ease;
      transform: translate3d(0, 0, 0);
      opacity: 1;

      @include until($tablet) {
        font-size: $size-4;
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }

    &__button {
      color: $pink;
      display: flex;
      margin-top: 10px;
      transition: color 300ms ease;

      .icon {
        padding-right: 10px;
      }

      &:hover {
        color: $white;
      }
    }

    &__details {
      font-size: $size-5;
      transform: translate3d(-50px, 0, 0);
      color: $white;
      opacity: 0;
      transition: opacity 150ms ease-out, transform 300ms ease;
      transform: translate3d(0, 0, 0);
      opacity: 1;

      @include until($tablet) {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }
  }
}
</style>
