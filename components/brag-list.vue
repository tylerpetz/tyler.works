<script>
export default {
  name: "brag-list",
  props: {
    brags: {
      type: Array,
      default: () => []
    }
  },
};
</script>

<template>
  <ul>
    <li
      class="text-lg mb-6 flex flex-row items-center"
      v-for="brag in brags"
      :key="brag.sys.id"
    >
      <svg-icon
        class="h-6 w-6 mr-4 hover:text-theme-link transition-colors duration-75 flex-shrink-0"
        :name="brag.fields.image"
      />
      <div
        class="content mt-1"
        v-interpolation
        v-html="$md.render(brag.fields.content)"
      />
    </li>
  </ul>
</template>
