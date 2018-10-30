<template>
  <footer class="controls">
    <!--<b-dropdown position="is-top-left">
      <a class="controls__button dropdown__link" slot="trigger">
        <i class="fas fa-cog"></i>
      </a>
      <b-dropdown-item custom paddingless>
        <form action="">
          <div class="modal-card">
            <section class="modal-card-body">
              <div class="field">
                <b-switch :value="false">
                  Highlight industry buzzwords
                </b-switch>
              </div>
              <div class="field">
                <b-switch :value="false" type="is-dark">
                  Hacker Mode
                </b-switch>
              </div>
            </section>
          </div>
        </form>
      </b-dropdown-item>
    </b-dropdown>-->
    <a 
      class="controls__button dropdown__link" 
      @click="noScroll"><i class="fas fa-arrow-up"/></a>
  </footer>
</template>

<script>
export default {
  methods: {
    noScroll() {
      this.$toast.open({
        duration: 1200,
        message: "Lazy mode active.",
        position: "is-bottom",
        type: "is-danger"
      });
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>
