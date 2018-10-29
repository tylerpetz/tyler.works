<template>
  <div>
    <Projects
      :outro="projectOutro"
    />
    <ContactForm
      :intro="contactIntro"
    />
  </div>
</template>

<script>
import Projects from "@/components/Projects.vue";
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: "Work",
  components: {
    Projects,
    ContactForm
  },
  data() {
    return {
      contactIntro:
        "Cool projects huh? Get in touch with me if you wanna talk shop.",
      projectOutro:
        "Those are my favorite ones, the rest are on <a href='https://github.com/tylerpetz' target='_blank' class='list-item__link'>my github</a>, peep it."
    };
  }
};
</script>
