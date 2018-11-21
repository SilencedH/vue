import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import vuescroll from "vue-scroll";

Vue.config.productionTip = false;
Vue.use(vuescroll);
new Vue({
  render: h => h(App),
  router
}).$mount("#app");
