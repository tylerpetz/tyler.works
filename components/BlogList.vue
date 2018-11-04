<template>
  <section
    v-if="posts"
    class="blog">
    <h1
      class="list-item section-heading"
      v-html="intro"/>
    <div
      v-for="(post, index) in posts.slice(0, postCount)"
      :key="index">
      <article class="blog-post">
        <h2 class="blog-post__title"><nuxt-link :to="'/blog/' + post.fields.slug">{{ post.fields.title }}</nuxt-link></h2>
        <time class="blog-post__date">Published on: <span v-html="formatDate(post.fields.publishDate)" /></time>
        <p class="blog-post__content">
          {{ post.fields.description }}
        </p>
      </article>
    </div>
    <p
      class="list-item"
      v-html="outro"/>
  </section>
</template>

<script>
import moment from "moment";

export default {
  props: {
    intro: {
      type: String,
      default: "Here is some stuff that I wrote about <em>web development</em>."
    },
    outro: {
      type: String,
      default: ""
    },
    postCount: {
      type: Number,
      default: 10
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    }
  },
  methods: {
    formatDate(date) {
      return moment(date).format("MMMM Do YYYY");
    }
  },
  async fetch({ store, params }) {
    await store.dispatch("posts/getPosts", params.slug);
  }
};
</script>

<style lang="scss" scoped>
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
</style>
