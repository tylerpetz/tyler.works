<template>
  <ContactForm />
</template>

<script>
import ContactForm from '../components/ContactForm'

export default {
  name: 'Contact',
  components: {
    ContactForm
  },
  head() {
    return {
      title: 'Here is my contact form.',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Here is my contact form.'
        }
      ]
    }
  }
}
</script>
