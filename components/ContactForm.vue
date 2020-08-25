<script>
export default {
  name: 'ContactForm',
  data () {
    return {
      emailRegex: /(.+)@(.+){2,}\.(.+){2,}/,
      formFilled: false,
      form: {
        name: '',
        email: '',
        message: '',
        botcheck: null
      },
      intro: false,
      optionFields: {
        job: {
          label: 'Nice. Tell me a little bit about your project or company.',
          button: 'Click to send email.<span class="line-break">&nbsp;You\'re making the right choice!</span>',
          placeholder: 'The job pays...'
        },
        friend: {
          label: 'Oh yeah! When should we meet for beers?',
          button: 'Click to send email.<span class="line-break">&nbsp;Can\'t wait to hang!</span>',
          placeholder: 'I am free tomorrow.'
        },
        troll: {
          label: 'Wow, okay. What will it take to convince you?',
          button: 'Click to send email.<span class="line-break">&nbsp;Show me what you got.</span>',
          placeholder: 'I have all the free time in the world.'
        }
      },
      selected: null,
      selectedOptionFields: {
        label: "Got somethin' to say?",
        placeholder: 'Hey dude.'
      },
      slimForm: false,
      validEmail: false
    }
  },
  computed: {
    formSubmitted () {
      return this.$store.state.app.formSubmitted
    },
    formError () {
      return this.$store.state.app.formError
    },
    selectedOption () {
      return this.selectedOptionFields
    },
    isFormFilled () {
      if (
        this.form.name &&
        this.validEmail &&
        this.form.message &&
        this.selected
      ) {
        return true
      } else {
        return false
      }
    },
    nameValid () {
      if (this.form.name.length > 3) {
        return 'fas fa-smile filled'
      } else if (this.form.name) {
        return 'fas fa-meh filling'
      } else {
        return 'fas fa-frown empty'
      }
    },
    emailValid () {
      if (this.validEmail) {
        return 'fas fa-smile filled'
      } else if (this.form.email) {
        return 'fas fa-meh filling'
      } else {
        return 'fas fa-frown empty'
      }
    }
  },
  mounted () {
    if (this.$route.params.goTo === 'job') {
      this.companyWantsToHireMe()
    }
  },
  methods: {
    actProfessional () {
      this.slimForm = true
      this.optionFields.job.placeholder = ''
      this.intro = 'Considering Tyler Petz as your next Web Developer is a great choice. Please fill out this form so I can harvest your... get to know you more.'
    },
    companyWantsToHireMe () {
      this.actProfessional()
      this.selected = 'job'
      this.onSelect()
    },
    onSelect () {
      this.selectedOptionFields = this.optionFields[this.selected]
    },
    submitForm () {
      this.$root.$emit('submit', this.form)
    },
    validateEmail (ev) {
      this.form.email = ev.target.value
      this.validEmail = this.emailRegex.test(this.form.email)
    },
    validateMessage (ev) {
      this.form.message = ev.target.value
    },
    validateName (ev) {
      this.form.name = ev.target.value
    }
  }
}
</script>

<template>
  <section class="contact">
    <transition name="page">
      <div v-if="!formSubmitted">
        <slot name="header">
          <h1 class="list-item section-heading">
            If you aren't a robot, fill out this form to contact me. If you are a robot, we have already spoken.
          </h1>
        </slot>
        <div class="columns">
          <div class="column is-12-mobile">
            <form
              name="contact-form"
              class="contact__form"
              data-netlify="true"
              @submit.prevent="submitForm"
            >
              <input
                type="hidden"
                name="form-name"
                value="contact-form"
              >
              <input
                v-model="form.botcheck"
                type="email"
                class="botcheck"
              >
              <div class="field">
                <label
                  class="label is-large"
                  for="name"
                >
                  What is your name?
                </label>
                <div class="control has-icons-right">
                  <input
                    id="name"
                    name="name"
                    class="input is-large"
                    type="text"
                    placeholder="My name is Tyler Petz"
                    @input="validateName"
                  >
                  <span class="icon is-large is-right">
                    <i :class="nameValid" />
                  </span>
                </div>
              </div>
              <div class="field">
                <label
                  class="label is-large"
                  for="email"
                >
                  What is your e-mail address?
                </label>
                <div class="control has-icons-right">
                  <input
                    id="email"
                    name="email"
                    class="input is-large"
                    type="email"
                    placeholder="My email address is tylerpetz@gmail.com"
                    @input="validateEmail"
                  >
                  <span class="icon is-large is-right">
                    <i :class="emailValid" />
                  </span>
                </div>
              </div>
              <div
                v-if="!slimForm"
                class="field"
              >
                <label
                  class="label is-large"
                  for="type"
                >
                  Do you believe me now?
                </label>
                <div class="control">
                  <div class="select is-large">
                    <select
                      id="type"
                      v-model="selected"
                      @change="onSelect()"
                    >
                      <option
                        :value="null"
                        selected
                        disabled
                      >
                        Well...
                      </option>
                      <option value="job">
                        No further convincing neccessary, I'd like to hire you.
                      </option>
                      <option value="friend">
                        Yes of course, and I'd like to become life long friends.
                      </option>
                      <option value="troll">
                        I'm still skeptical, certain things aren't adding up.
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field field--last">
                <label
                  class="label is-large"
                  for="message"
                  v-html="selectedOption.label"
                />
                <div class="control">
                  <textarea
                    id="message"
                    :placeholder="selectedOption.placeholder"
                    name="message"
                    class="textarea is-large"
                    @input="validateMessage"
                  />
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
                  class="button is-large is-info"
                >
                  Send Email
                </button>
                <p class="helper">
                  Not so fast, partner. You haven't even finished filling out
                  the form.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div v-else-if="formError">
        <h1 class="list-item section-heading">
          Yikes, there was a problem with the form. I'm sure Tyler will get
          around to fixing that.
        </h1>
      </div>
      <div v-else>
        <h1 class="list-item section-heading">
          Good job submitting that form, I'm proud of you!
        </h1>
      </div>
    </transition>
  </section>
</template>

<style lang="scss">
.contact {
  margin-bottom: $gap;

  .field {
    &--last {
      margin-top: $gap / 2;
    }
  }

  .select {
    width: 100%;

    select {
      width: 100%;

      &:focus {
        option:disabled {
          display: none;
        }
      }
    }
  }

  .input {
    & + .icon {
      & > i {
        transition: color 300ms ease;

        &.empty {
          color: #333;
        }

        &.filled {
          color: $green;
        }

        &.filling {
          color: $warning;
        }
      }
    }

    &:focus + .icon > i {
      color: $danger;

      &.filled {
        color: $green;
      }

      &.filling {
        color: $warning;
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
    background: linear-gradient(135deg, $green 0%, $lightblue 100%);
    color: $white;
    transition: opacity 150ms ease;
    width: 100%;

    & + .helper {
      color: $red;
      display: block;
      opacity: 0;
      transition: opacity 150ms ease;
    }

    &[disabled] {
      &:hover {
        & + .helper {
          opacity: 1;
        }
      }
    }
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
}

.botcheck {
  display: none !important;
}
</style>
