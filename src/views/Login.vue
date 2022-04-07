<template>
  <div class="container">
    <div class="container-login">
      <h3 class="title-login">Infinite<br /></h3>
      <input
        class="input-login"
        v-model="emailLogin"
        type="email"
        placeholder="Login:"
      />
      <input
        class="input-password"
        v-model="passwordLogin"
        type="password"
        placeholder="Senha:"
      />
      <button class="btn-login" @click="postUserLogin">ACESSAR</button>

      <p class="text-info">Acesse suas informações de Avaliação</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      emailLogin: "",
      passwordLogin: "",
      usersLogin: [],
    };
  },
  computed: {
    ...mapGetters(["token", "users"]),
    ...mapMutations(["SET_TOKEN", "SET_USERS"]),
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
          this.$router.push("/student");
          return response.data;
        })
        .then(console.log)
        .catch((e) => {
          console.log(e);
        });
    },
    getRole() {
      let users = this.response.data;
      if (users.role == "teacher") {
        loginTeacher();
      } else if (users.role == "student") {
        loginStudent();
      }
    },
  },
};
</script>

<style>
.container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  margin: 0;
  background-image: url("../assets/earth.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.container-login {
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 320px;
  margin-top: 60px;
}

.title-login {
  font-size: 24px;
  font-weight: bold;
  color: #09605d;
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
  background-color: #09605d;
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
