<script>
export default {
  name: 'ProjectListItem',
  props: {
    project: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<template functional>
  <router-link to="/">
    <article class="bg-theme-bg-l hover:bg-theme-bg-d transition-colors shadow-xl rounded p-8 duration-75 cursor-pointer">
      <h1 class="text-theme-link text-2xl">
        {{ props.project.fields.title }}
      </h1>
      <p>
        {{ props.project.fields.description }}
      </p>
      <!-- <ul class="flex flex-row mt-4 space-x-2">
        <li class="bg-mod-cap text-mod-legend rounded text-sm flex items-center px-1">
          Wordpress
        </li>
        <li class="bg-mod-cap text-mod-legend rounded text-sm flex items-center px-1">
          Paypal SDK
        </li>
        <li class="bg-mod-cap text-mod-legend rounded text-sm flex items-center px-1">
          AWS
        </li>
      </ul> -->
    </article>
  </router-link>
</template>
