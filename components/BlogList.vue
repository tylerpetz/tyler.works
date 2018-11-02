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
        <span class="blog-post__date">{{ post.fields.publishDate }}</span>
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
  async fetch({ store, params }) {
    await store.dispatch("posts/getPosts", params.slug);
  }
};
</script>
