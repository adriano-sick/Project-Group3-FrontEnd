<template>
  <div class="container">
    <nav>
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
</style>
