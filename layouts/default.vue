<template>
  <div>
    <h1 class="site-title">
      <nuxt-link
        :to="{ path: '/' }"
        class="site-title__link">
        Nuxt Demo
      </nuxt-link>
    </h1>

    <section class="main-content columns">

      <div class="container column ">
        <nuxt />
      </div>

    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'Home', icon: 'home', to: { name: 'index' } },
        { title: 'Inspire', icon: 'lightbulb', to: { name: 'inspire' } }
      ]
    };
  }
};
</script>
