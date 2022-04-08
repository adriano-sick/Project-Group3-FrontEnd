<template>
  <div class="container">
    <banner class="banner-text">
      <p>O que você quer acessar?</p>
    </banner>
    <nav class="nav-teacher">
      <router-link to="/teachergrades">Professor - Notas</router-link>

      <router-link to="/teacherevaluations">Professor - Provas</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Teacher",
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
.nav-teacher {
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
.nav-teacher a {
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
