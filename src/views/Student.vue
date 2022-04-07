<template>
  <div>
    <nav>
      <router-link to="/studentgrade">Alunos - Notas</router-link>
      <router-link to="/studentevaluation">Alunos - Provas</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Student",
};
</script>

<style></style>
