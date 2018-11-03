<template>
  <div>
    <BlogList :post-count="10" />
    <ContactForm
      :intro="contactIntro"
    />
  </div>
</template>

<script>
import BlogList from "~/components/BlogList";
import ContactForm from "~/components/ContactForm.vue";

export default {
  components: {
    BlogList,
    ContactForm
  },
  data() {
    return {
      contactIntro:
        "Want to talk some more about that stuff that I blogged about?"
    };
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
