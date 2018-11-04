<template>
  <div>
    <article
      v-if="!isLoading"
      class="post">
      <header class="post__header">
        <h1 class="post__title">
          {{ currentPost.fields.title }}
        </h1>
        <time class="post__date">Published on: <span v-html="formatDate(currentPost.fields.publishDate)" /></time>
        <time class="post__date">Last Updated: <span v-html="formatDate(currentPost.fields.updatedAt)" /></time>
        <div class="post__border" />
      </header>
      <section>
        <div
          class="post__content content"
          v-html="$md.render(currentPost.fields.body)"
        />
        <div
          v-if="currentPost.fields.tags"
          class="post__tags">
          <div
            v-for="(tag, index) in currentPost.fields.tags"
            :key="index">
            <i
              :class="'fa-' + tag.toLowerCase()"
              class="fab fa-2x" />
          </div>
        </div>
      </section>
    </article>
    <ContactForm intro="Use this contact form to get in touch with me." />
  </div>
</template>

<script>
import moment from "moment";
import ContactForm from "~/components/ContactForm.vue";

export default {
  components: {
    ContactForm
  },
  head() {
    return {
      title: `Tyler Petz - ${this.currentPost.fields.title}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.currentPost.fields.description
        }
      ]
    };
  },
  computed: {
    currentPost() {
      return this.$store.state.post.currentPost;
    },
    isLoading() {
      return this.$store.state.post.isLoading;
    }
  },
  methods: {
    formatDate(date) {
      return moment(date).format("MMMM Do YYYY");
    }
  },
  async fetch({ store, params }) {
    await store.dispatch("post/getPostBySlug", params.slug);
  }
};
</script>

<style lang="scss" scoped>
.post {
  &__header {
    padding-top: $gap;
    flex-direction: column;
    display: flex;
    margin-bottom: $gap / 2;
    width: 100%;

    .container {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
  }

  &__title {
    font-size: $size-2;
    opacity: 1;
    font-weight: bold;
    color: $blue;

    @include until($tablet) {
      font-size: $size-4;
    }
  }

  &__date {
    color: darken($white, 30%);
    font-size: $size-6;
    font-style: italic;
  }

  &__border {
    width: 100%;
    display: block;
    height: 10px;
    margin-top: $gap / 2;
    background: linear-gradient(160deg, $blue 0%, $purple 100%);
  }

  &__content {
    font-size: $size-5;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: $green;
      font-weight: normal;
    }
  }

  &__tags {
    display: flex;
  }
}
</style>
