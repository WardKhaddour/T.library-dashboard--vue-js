<template>
  <div id="app">
    <login-form></login-form>
  </div>
</template>
<script>
import LoginForm from "./components/LoginForm.vue";
export default {
  components: {
    loginForm: LoginForm,
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
</style>