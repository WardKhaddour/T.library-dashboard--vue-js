<template>
  <div class="container">
    <form id="loginForm">
      <div id="title">T.library</div>
      <input
        type="text"
        id="email"
        placeholder="email"
        value=""
        v-model="email"
        required
      /><br />
      <div id="emailAlert">{{ emailAlert }}</div>
      <input
        :type="passwordVisibilty"
        id="password"
        placeholder="password"
        v-model="password"
        required
      /><br />
      <div id="passwordAlert">{{ passwordAlert }}</div>
      <!-- <div id="submit" @click="submitForm">
        <p v-if="!isLoading">Login</p>

        <p v-if="isLoading"><loading-spinner></loading-spinner></p>
      </div> -->
      <input type="button" value="login" />
      <br />
    </form>
    <div id="alert" style="color: red"></div>
  </div>
</template>
<script>
import LoadingSpinner from "./LoadingSpinner.vue";
import Home from "./Home.vue";
export default {
  data() {
    return {
      email: "",
      password: "",
      passwordVisibilty: "password",
      isLoading: false,
      emailAlert: "",
      passwordAlert: "",
    };
  },
  components: {
    home: Home,
    loadingSpinner: LoadingSpinner,
  },
  methods: {
    validate() {
      if (this.email === "") {
        this.emailAlert = "Please Input Email";
      }
      if (this.password === "") {
        this.passwordAlert = "Please Input Password";
      }
      if (this.password.length < 6 && this.password != "") {
        this.passwordAlert;
        ("Password should be at least 6 charechters");
      }
      if (
        (!this.email.includes("@") || !this.email.includes(".")) &&
        this.email != ""
      ) {
        this.emailAlert = "Invalid Email";
      }
      if (this.emailAlert === "" && this.passwordAlert === "") {
        return true;
      }
      return false;
    },
    submitForm(e) {
      console.log(this.isValid + "is Valid");
      console.log(this.isLoading + "is Loading");
      e.preventDefault();
      const isValid = this.validate();
      if (!this.isLoading) {
        if (isValid) {
          this.emailAlert = "";
          this.passwordAlert = "";
          this.isLoading = true;
          console.log(this.email);
          console.log(this.password);
          //login
          this.$http
            .post("api/loginAdmin", {
              email: this.email,
              password: this.password,
            })
            .then((res) => {
              this.isLoading = false;
              console.log(res);
              let token = res["body"]["token"];
              console.log(token);
              this.$router.push({ name: "home" }).catch((error) => {
                console.log(error);
              });
            })
            .catch((error) => {
              console.log("asddaksdas");
              this.isLoading = false;
              this.password = "";
              console.log(error);
            });
        }
      } else {
        console.log("A7AA");
        return;
      }
    },
  },
};
</script>


<style scoped>
input {
  border: none;
  outline: none;
  background-color: white;
}
input:focus {
  border: none;
  outline: none;
}
#title {
  font-size: 36px;
  color: #fff;
  justify-content: center;
  margin-bottom: 20%;
}
.container {
  margin-right: 7%;
  margin-top: 10%;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-end;
  text-align: center;
  gap: 26px;
  justify-content: center;
}
#email,
#password {
  padding: 10px 20px;
  margin: 20px;
  border-radius: 25px;
  background-color: white;
  opacity: 0.49;
}
#submit {
  padding: 0% 7%;
  margin-top: 5%;
  border-radius: 25px;
  width: fit-content;
  background-color: white;
  opacity: 0.55;
  color: #1f211f;
  font-weight: bold;
  font-size: 17px;
  text-align: center;
}
#submit:hover {
  cursor: pointer;
}

#passwordAlert,
#emailAlert {
  color: red;
  font-size: 60%;
  opacity: 0.7;
}
</style>