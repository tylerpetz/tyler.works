<script>
export default {
  name: 'buzzword',
  computed: {
    buzzwords () {
      return this.$store.state.app.buzzwords
    }
  }
}
</script>

<template>
  <span
    :class="{ 'buzzword--highlighted': buzzwords }"
    class="buzzword"
  >
    <slot />
  </span>
</template>


<style lang="scss" scoped>
// .buzzword {
//   &--highlighted {
//     background: $purple;
//     color: $white;
//   }
// }
</style>

