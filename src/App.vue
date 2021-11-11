<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import LoginForm from "./components/LoginForm.vue";
import Home from "./components/Home.vue";
export default {
  components: {
    loginForm: LoginForm,
    home: Home,
  },
  beforeMount() {
    this.$store.commit("tryAutoLogin");
    if (this.$store.getters.token != null) {
      this.$router.push("/home").catch((error) => console.log(error));
    }
  },
};
</script>
<style>
body {
  background-image: url(./assets/login_background.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-clip: border-box;
}
* {
  font-size: 16px;
}
</style>