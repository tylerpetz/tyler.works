<template>
  <ContactForm />
</template>

<script>
import ContactForm from "../components/ContactForm.vue";

export default {
  name: "Contact",
  components: {
    ContactForm
  },
  data() {
    return {
      title: "Here is my contact form."
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.title
        }
      ]
    };
  }
};
</script>
