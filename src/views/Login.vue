<template>
  <div class="container">
    <div class="container-login">
      <h3 class="title-login">Infinite<br /></h3>
      <input
        class="input-login"
        :v-model="emailLogin"
        type="text"
        placeholder="Login:"
      />
      <input
        class="input-password"
        :v-model="passwordLogin"
        type="password"
        placeholder="Senha:"
      />
      <button class="btn-login" v-on:click="getRole()">LOGIN ESTUDANTE</button>
      <button class="btn-login" v-on:click="loginTeacher()">
        LOGIN PROFESSOR
      </button>

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
      email: "",
      password: "",
      emailLogin: "",
      passwordLogin: "",
      role: "",
    };
  },
  computed: {
    ...mapGetters(["token"]),
    ...mapMutations(["SET_TOKEN"]),
  },
  created() {
    this.getToken();
    this.getUserLogin();
  },
  methods: {
    getToken() {
      axios
        .post("https://group3-anima.herokuapp.com/Home/Login", {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          body: {
            email: "matheus@matheus.com",
            password: "matheus",
          },
        })
        // .then((response) => {
        //   context.commit("SET_TOKEN", response.data.token);
        // })
        .then(console.log)
        .catch((e) => {
          console.log(e);
        });
    },
    getUserLogin() {
      axios
        .get("https://group3-anima.herokuapp.com/User", {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbUBhZG0uY29tIiwicm9sZSI6ImFkbWluaXN0cmF0b3IiLCJuYmYiOjE2NDkzNDc0MjEsImV4cCI6MTY0OTM1NDYyMSwiaWF0IjoxNjQ5MzQ3NDIxfQ.MV5IFHkAZYyd1PNJE7EN9T5q9kimg7UQXvNpSKEQq2k",
          },
        })
        .then((response) => {
          this.email = response.data.email;
          this.password = response.data.password;
          this.role = response.data.role;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getRole() {
      if (this.role == "teacher") {
        loginTeacher();
      } else if (this.role == "student") {
        loginStudent();
      }
    },
    loginTeacher() {
      // if(this.emailLogin == this.email){
      // this.$router.push("/teacher");
      // }else{
      //    this.$router.push("/");
      // }
      this.$router.push("/teacher");
    },
    loginStudent() {
      // if(this.emailLogin == this.email){
      // this.$router.push("/student");
      // }else{
      //    this.$router.push("/");
      // }
      this.$router.push("/student");
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
