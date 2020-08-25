<script>
export default {
  name: 'ProjectList',
  props: {
    count: {
      type: Number,
      default: 10
    },
    projects: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<template>
  <div class="mb-12">
    <slot name="header" />
    <section v-if="projects" class="my-8 grid grid-cols-2 gap-8">
      <article v-for="(project, index) in projects.slice(0, count)" :key="index" class="bg-theme-bg-l hover:bg-theme-bg-d transition-colors shadow-xl rounded p-8 duration-75 cursor-pointer">
        <h1 class="text-theme-link text-2xl">
          {{ project.fields.title }}
        </h1>
        <p class="text-theme-text text-shadow">
          {{ project.fields.description }}
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
    </section>
    <slot name="footer">
      <p class="list-item">
        This isn't all of them, that'd be nuts. The rest can be found
        <nuxt-link
          class="list-item__link"
          to="/work"
        >
          on my work page
        </nuxt-link> though.
      </p>
    </slot>
  </div>
</template>
