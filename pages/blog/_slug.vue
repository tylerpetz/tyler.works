<template>
  <div>
    <article
      v-if="!isLoading"
      class="post"
    >
      <header class="post__header">
        <h1 class="post__title">
          {{ post.fields.title }}
        </h1>
        <time class="post__date">
          Published on:
          <span v-html="formatDate(post.fields.publishDate)" />
        </time>
        <time class="post__date">
          Last Updated:
          <span v-html="formatDate(post.fields.updatedAt)" />
        </time>
        <div class="post__border" />
      </header>
      <section>
        <div
          class="post__content content"
          v-html="$md.render(post.fields.body)"
        />
        <div
          v-if="post.fields.tags"
          class="post__tags"
        >
          <div
            v-for="(tag, index) in post.fields.tags"
            :key="index"
          >
            <i
              :class="'fa-' + tag.toLowerCase()"
              class="fab fa-2x"
            />
          </div>
        </div>
      </section>
    </article>
    <ContactForm intro="Use this contact form to get in touch with me." />
  </div>
</template>

<script>
import ContactForm from '~/components/ContactForm'

export default {
  name: 'Post',
  middleware: 'post',
  components: {
    ContactForm
  },
  computed: {
    post () {
      return this.$store.state.posts.activePost
    },
    isLoading () {
      return this.$store.state.posts.isLoading
    }
  },
  methods: {
    formatDate (date) {
      const formatted = new Date(date)
      return (
        formatted.getMonth() +
        1 +
        '-' +
        formatted.getDate() +
        '-' +
        formatted.getFullYear()
      )
    }
  },
  head () {
    return {
      title: `Tyler Petz - ${this.post.fields.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.fields.description
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
// .post {
//   &__header {
//     display: flex;
//     flex-direction: column;
//     margin-bottom: $gap / 2;
//     padding-top: $gap;
//     width: 100%;
//   }

//   &__title {
//     color: $blue;
//     font-size: $size-2;
//     font-weight: bold;
//     opacity: 1;

//     @include until($tablet) {
//       font-size: $size-4;
//     }
//   }

//   &__date {
//     color: darken($white, 30%);
//     font-size: $size-6;
//     font-style: italic;
//   }

//   &__border {
//     background: linear-gradient(160deg, $blue 0%, $purple 100%);
//     display: block;
//     height: 10px;
//     margin-top: $gap / 2;
//     width: 100%;
//   }

//   &__content {
//     font-size: $size-5;

//     h1,
//     h2,
//     h3,
//     h4,
//     h5,
//     h6 {
//       color: $green;
//       font-weight: normal;
//     }
//   }

//   &__tags {
//     display: flex;
//   }
// }
</style>
