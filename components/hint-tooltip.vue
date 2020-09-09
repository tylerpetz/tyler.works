<script>
export default {
  name: 'hint-tooltip',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<template functional>
  <span class="tooltip">
    <slot />
    <span class="tooltip-text">{{ props.text }}</span>
  </span>
</template>
