<template>
  <div>
    <div class="container-Default" v-if="isActiveLogin">
      <div class="container-login">
        <h3 class="title-login">Infinite<br /></h3>
        <hr />
        <input
          class="form-control input-login"
          v-model="emailLogin"
          type="email"
          placeholder="Digite seu e-mail"
        />
        <input
          class="form-control input-password"
          v-model="passwordLogin"
          type="password"
          placeholder="Digite sua senha"
        />
        <button
          class="btn btn-login btn-outline-success"
          aria-describedby="infoHelp"
          @click="postUserLogin"
        >
          ACESSAR
        </button>
        <small id="infoHelp" class="form-text text-muted"
          >Nunca iremos compartilhar seus dados.</small
        >
        <!--<p class="text-info">Acesse suas informações de Avaliação</p>-->
      </div>
    </div>

    <router-view :userID="userID" v-if="isActiveRouter"></router-view>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      emailLogin: "",
      passwordLogin: "",
      usersLogin: [],
      isActiveLogin: true,
      isActiveRouter: false,
    };
  },
  computed: {
    ...mapGetters(["token", "users", "userID", "userName"]),
    ...mapMutations(["SET_TOKEN", "SET_USERS", "SET_USERID", "SET_USERNAME"]),
  },
  methods: {
    postUserLogin() {
      const credentials = {
        email: this.emailLogin,
        password: this.passwordLogin,
      };
      axios
        .post("https://group3-anima.herokuapp.com/Home/Login", credentials)
        .then((response) => {
          this.isActiveLogin = false;
          this.usersLogin = response.data.user;
          this.$store.commit("SET_TOKEN", response.data.token);
          this.$store.commit("SET_USERID", response.data.user.userId);
          this.$store.commit("SET_USERNAME", response.data.user.name);
          console.log(this.usersLogin);
          this.getRole();
          return response.data;
        })
        .then(console.log)
        .catch((e) => {
          console.log(e);
        });
    },
    getRole() {
      if (
        this.usersLogin.role === "professor" ||
        this.usersLogin.role === "administrator"
      ) {
        this.isActiveRouter = true;
        this.$router.push("teacher");
      } else if (
        this.usersLogin.role === "student" ||
        this.usersLogin.role === "administrator"
      ) {
        this.isActiveRouter = true;
        this.$router.push("student");
      }
    },
  },
};
</script>

<style>
.container-Default {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  margin: 0;
  background-color: black;
}

.container-login {
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 320px;
  margin-top: 150px;
}

.title-login {
  font-size: 24px;
  font-weight: bold;
  color: #0c827e;
}

.img-icones {
  width: 100%;
  margin-bottom: 8px;
}

.input-login,
.input-password {
  height: 38px;
  margin-bottom: 12px;
  border-radius: 10px;
  padding: 8px;
  text-align: center;
}

.input-login::placeholder,
.input-password::placeholder {
  color: #959595;
  font-weight: bold;
}

.btn-login {
  width: 100%;
  height: 38px;
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 14px;
  font-family: "Roboto", Arial, sans-serif;
  padding: 4px;
  border-radius: 10px;
  background-color: #0c827e;
  color: whitesmoke;
  margin: 8px 0;
  cursor: pointer;
  border-color: transparent;
}

.text-info {
  text-align: left;
  font-size: 11px;
  color: white;
  font-size: 14px;
}
</style>
