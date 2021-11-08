import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import { routes } from "./routes";
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.root = "http://127.0.0.1:8000";
const router = new VueRouter({
  mode: "history",
  routes: routes
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
