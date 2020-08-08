<template>
  <span
    :class="{ 'buzzword--highlighted': buzzwords }"
    class="buzzword"
  >
    <slot />
  </span>
</template>

<script>
export default {
  name: 'Buzzword',
  computed: {
    buzzwords () {
      return this.$store.state.app.buzzwords
    }
  }
}
</script>

<style lang="scss" scoped>
.buzzword {
  &--highlighted {
    background: $purple;
    color: $white;
  }
}
</style>
