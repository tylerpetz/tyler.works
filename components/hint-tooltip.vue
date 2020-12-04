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
  <span class="group">
    <slot />
    <span class="invisible p-4 absolute z-50 inline-block ml-4 text-sm w-auto rounded-lg bg-gray-700 text-white group-hover:visible">{{ props.text }}</span>
  </span>
</template>
