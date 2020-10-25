import Vue from "vue";
import router from "./router";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css";

import App from "./App";

import Default from "./Layout/Wrappers/baseLayout.vue";
import Pages from "./Layout/Wrappers/pagesLayout.vue";
import store from "./store";
import "core-js/stable";
import "./icons";
import "./filters";
import VueBootstrapToasts from "vue-bootstrap-toasts";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueBootstrapToasts);
Vue.component("default-layout", Default);
Vue.component("userpages-layout", Pages);

new Vue({
  el: "#app",
  store,
  router,
  components: { App },
  template: "<App/>",
});
