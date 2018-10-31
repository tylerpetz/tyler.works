import Vue from "vue";
import headroom from "headroom.js";

const Headroom = {
  install(Vue, options) {
    Vue.component("headroom", headroom);
  }
};

Vue.use(Headroom);
export default Headroom;
