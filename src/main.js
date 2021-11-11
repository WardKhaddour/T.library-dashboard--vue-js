import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import { BootstrapVue } from "bootstrap-vue";
import { routes } from "./routes";
import store from "./store";
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.use(BootstrapVue);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.http.options.root = "http://127.0.0.1:8000/api";
// Vue.http.interceptors.push((request, next) => {
//   request.headers.set("Authorization", this.$store.state.token);
//   request.headers.set("Accept", "application/json");
//   next();
// });
const router = new VueRouter({
  mode: "history",
  routes: routes
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
