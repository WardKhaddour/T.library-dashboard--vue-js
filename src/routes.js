import LoginForm from "./components/LoginForm.vue";
import Home from "./components/Home.vue";
export const routes = [
  { path: "", component: LoginForm },
  { path: "/home", name: "home", component: Home }
];
