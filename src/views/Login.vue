<template>
  <div class="container">
    <div class="container-login">
      <h3 class="title-login">Infinite<br /></h3>
      <input class="input-login" type="text" placeholder="Login:" />
      <input class="input-password" type="password" placeholder="Senha:" />
      <button class="btn-login" v-on:click="loginStudent()">
        LOGIN ESTUDANTE
      </button>
      <button class="btn-login" v-on:click="loginTeacher()">
        LOGIN PROFESSOR
      </button>

      <p class="text-info">Acesse suas informações de Avaliação</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

  methods: {
    loginTeacher() {
      this.$router.push("/teacher");
    },
    loginStudent() {
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
  margin: 0 auto;
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
  color: rgb(60, 20, 155);
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
  color: #777;
  font-size: 14px;
}
</style>
