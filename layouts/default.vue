<template>
  <div>
    <no-ssr>
      <Header />
    </no-ssr>
    <div class="container">
      <div class="columns">
        <div class="column is-12-desktop">
          <transition name="router-anim">
            <nuxt />
          </transition>
        </div>
      </div>
    </div>
    <Controls />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Controls from "../components/Controls.vue";

export default {
  components: {
    Header: () => import("@/components/Header.vue"),
    Controls
  },
  mounted() {
    this.$root.$on("submit", form => {
      this.handleSubmit(form);
    });
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit(form) {
      console.log(form);
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": "contact-form",
          name: form.name,
          email: form.email,
          message: form.message
        })
      })
        .then(() => {
          console.log("thanks");
        })
        .catch(() => {
          console.log("aight");
        });
    }
  }
};
</script>

<style lang="scss">
@import url("https://use.typekit.net/mdz6hax.css");
.router-anim-enter-active {
  animation: coming 0.5s;
  animation-delay: 0.5s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going 0.5s;
}

@keyframes going {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-50px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
