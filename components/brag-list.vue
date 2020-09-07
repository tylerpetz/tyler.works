<script>
export default {
  name: 'brag-list',
  props: {
    brags: {
      type: Array,
      default: () => []
    }
  },
}
</script>

<template>
  <ul>
    <li
      v-for="brag in brags"
      :key="brag.sys.id"
      class="text-lg mb-6 flex flex-row items-center"
    >
      <svg-icon
        class="h-6 w-6 mr-4 hover:text-theme-link transition-colors duration-75 flex-shrink-0"
        :name="brag.fields.image"
      />
      <div
        v-interpolation
        class="content mt-1"
        v-html="$md.render(brag.fields.content)"
      />
    </li>
  </ul>
</template>
