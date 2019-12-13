<template>
  <Resume />
</template>

<script>
import Resume from '../components/Resume'

export default {
  name: 'CV',
  components: {
    Resume
  },
  head() {
    return {
      title: 'Tyler Petz - Front-End Web Developer',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tyler Petz - Front-End Web Developer'
        }
      ]
    }
  }
}
</script>
