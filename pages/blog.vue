<template>
  <div>
    <BlogPosts
      :blog-count="10"
    />
    <ContactForm
      :intro="contactIntro"
    />
  </div>
</template>

<script>
import BlogPosts from "@/components/BlogPosts.vue";
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: "Blog",
  components: {
    BlogPosts,
    ContactForm
  },
  data() {
    return {
      contactIntro:
        "Want to talk some more about that stuff that I blogged about?"
    };
  }
};
</script>
