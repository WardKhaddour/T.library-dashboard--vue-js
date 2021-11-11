<template>
  <div>
    <b-button v-b-toggle.sidebar-1 class="material-icons">menu</b-button>

    <b-sidebar id="sidebar-1" bg-variant="secondary" shadow>
      <div class="px-3 py-2">
        <b-nav vertical>
          <b-nav-item class="linkItem" @click="goToHome"
            ><span class="material-icons-outlined">home</span>
            <span class="linkTitle">Home</span>
          </b-nav-item>
          <b-nav-item class="linkItem"
            ><span class="material-icons-outlined">library_books</span>
            <span class="linkTitle">manage books</span>
          </b-nav-item>
          <b-nav-item class="linkItem"
            ><span class="material-icons-outlined">people_outline</span>
            <span class="linkTitle">manage users</span>
          </b-nav-item>
          <b-nav-item class="linkItem"
            ><span class="material-icons-outlined">request_quote</span>
            <span class="linkTitle">requests</span>
          </b-nav-item>
          <b-nav-item class="linkItem"
            ><span class="material-icons-outlined">settings</span>
            <span class="linkTitle">library settings</span>
          </b-nav-item>
          <b-nav-item class="linkItem"
            ><span class="material-icons-outlined">manage_accounts</span>
            <span class="linkTitle">account settings</span>
          </b-nav-item>
        </b-nav>
      </div>
    </b-sidebar>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Book from "./Book.vue";
export default {
  created() {
    if (this.$store.state.token == null) {
      alert("not authenticate");
      this.$router.back();
    } else {
      this.$http
        .get("book", {
          headers: { Authorization: "Bearer " + this.$store.state.token },
        })
        .then((res) => console.log(res))
        .catch((error) => {
          console.log(error);
        });
    }
  },
  components: {
    book: Book,
  },
  methods: {
    logOut() {
      this.$store.commit("logOut");
    },
    goToHome(e) {
      e.preventDefault();
    },
  },
};
</script>


<style scoped>
/* * {
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}
#body {
  background: url(../assets/login_background.png) grey;
  background-repeat: no-repeat;
  background-clip: border-box;
  background-position: 05% -10%;
  background-size: auto;
  min-height: 100%;
  /* opacity: 0; */

.nav-link {
  color: #fff;
  width: 100%;
}
.navbar {
  width: 90%;
}
.nav-link:hover {
  color: #fff;
  background-color: black;
  width: 100%;
}

.linkItem {
  width: 100%;
  color: #fff;
  font-size: small;
  /* margin-top: 2%; */
  /* padding: 5px 0; */
  text-decoration: none;
  display: flex;
}
.linkItem:hover {
  cursor: pointer;
  background-color: lightgray;
}
.linkTitle {
  margin-left: 10%;
  font-size: 100%;
  text-align: center;
  line-height: 1;
}
</style>