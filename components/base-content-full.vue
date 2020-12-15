<script>
export default {
  name: 'base-content-full'
}
</script>

<template functional>
  <article class="mb-20">
    <header class="prose prose-theme-text flex flex-col md:flex-row justify-between items-center mb-8">
      <h1 class="border-theme-link border-b-4">
        <slot name="header" />
      </h1>
    </header>
    <section
      class="prose prose-theme-text mb-8"
    >
      <slot />
    </section>
    <slot name="footer" />
  </article>
</template>
