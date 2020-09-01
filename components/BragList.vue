<script>
export default {
  name: "BragList",
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
    <li class="text-lg mb-6 flex flex-row items-center" v-for="brag in brags" :key="brag.sys.id">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        class="mr-4 hover:text-theme-link transition-colors duration-75 flex-shrink-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z" fill="currentColor" />
      </svg>
      <div class="content mt-1" v-interpolation v-html="$md.render(brag.fields.content)" />
    </li>
  </ul>
</template>
