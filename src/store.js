import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    token: ""
  },
  mutations: {
    saveUser(state) {
      if (state.token != null) {
        localStorage.setItem("token", state.token);
      }
      return;
    },
    tryAutoLogin(state) {
      const token = localStorage.getItem("token");
      console.log(token + "Token");
      state.token = token;
      // console.log(this.state.token != null + "check nul");
      // return this.state.token != null ? true : false;
    },
    logOut(state) {
      state.token = "";
      localStorage.removeItem("token");
    }
  },
  actions: {},
  getters: {
    token(state) {
      return state.token;
    }
  }
});
