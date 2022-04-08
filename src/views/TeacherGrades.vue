<template>
  <div class="container">
    <main class="main-content">
      <nav>
        <a href="" @click="backRoot">Voltar</a>
      </nav>
      <section class="main-section">
        <h1 class="main-title" tabindex="0">CONSULTE AS NOTAS DOS ALUNOS</h1>
        <table>
          <thead>
            <th>Nome dos Alunos</th>
            <th>Nota</th>
            <th></th>
            <th></th>
          </thead>
          <tbody>
            <tr>
              <th>Alan Ribeiro</th>
              <th><input type="text" /></th>
              <th><button class="button-action">Inserir nota</button></th>
              <th><button class="button-action">Alterar nota</button></th>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "TeacherGrades",
  methods: {
    backRoot() {
      this.$router.push("/");
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
.main-title {
  color: white;
}
table {
  font-family: "Arial";
  margin: 25px auto;
  border-collapse: collapse;
  border: 1px solid #00cccc;
  box-shadow: 0px 0px 20px;
  margin-top: 60px;
}

table th,
table td {
  color: white;
  border: 1px solid #eee;
  padding: 12px 35px;
  border-collapse: collapse;
  background-color: black;
}
</style>
