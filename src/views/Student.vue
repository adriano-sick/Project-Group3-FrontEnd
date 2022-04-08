<template>
  <div class="container">
    <banner class="banner-text">
      <p>O que você quer acessar?</p>
    </banner>
    <nav class="nav-student">
      <router-link to="/studentgrade">Alunos - Notas</router-link>
      <router-link to="/studentevaluation">Alunos - Provas</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Student",
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

.nav-student {
  display: flex;
  flex-direction: column;
  width: 50%;
  align-self: center;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}
.nav-student a {
  text-decoration: none;
  margin-bottom: 20px;
}

.banner-text {
  display: flex;
  flex-direction: column;
  width: 50%;
  align-self: center;
  font-size: 40px;
}
</style>
