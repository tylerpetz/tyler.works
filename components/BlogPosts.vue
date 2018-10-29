<template>
  <section class="blog">
    <h1
      class="list-item section-heading"
      v-html="intro"/>
    <article class="blog-post">
      <h2 class="blog-post__title"><a href="#">How to develop your web portfolio in under 10 years</a></h2>
      <span class="blog-post__date">10. 23. 18</span>
      <p class="blog-post__content">
        As a young and mostly self-taught developer, I have always been too busy studying or working to create too many projects for myself. I always looked up to great developers and drooled over their tasty portfolio websites, and I wanted mine to be as good as theirs were. I always wanted complicated setups with the latest tech, the sickest animations and transitions, and bleeding-edge responsive media queries that work on anything from an Apple Watch to a Jumbo-Tron...
      </p>
      <b-tooltip
        label="Inspiration"
        type="is-success">
        <b-icon
          pack="far"
          icon="lightbulb"
          size="is-medium"
          type="is-success" />
      </b-tooltip>
      <b-tooltip
        label="Prototyping"
        type="is-danger">
        <b-icon
          pack="fas"
          icon="pen"
          size="is-medium"
          type="is-danger" />
      </b-tooltip>
      <b-tooltip
        label="Source Control"
        type="is-info">
        <b-icon
          pack="fas"
          icon="code-branch"
          size="is-medium"
          type="is-info" />
      </b-tooltip>
    </article>
    <p
      class="list-item"
      v-html="outro"/>
  </section>
</template>

<script>
export default {
  name: "BlogPosts",
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
      default: 2
    }
  }
};
</script>

<style scoped lang="scss">
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

.tooltip {
  margin-right: $gap / 4;
}
</style>
