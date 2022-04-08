<template>
  <div class="container">
    <main class="main-content">
      <nav>
        <a href="" @click="backRoot">Voltar</a>
      </nav>
      <section class="main-section">
        <h1 class="main-title" tabindex="0">CONSULTE SUAS NOTAS</h1>
        <p>Nome do aluno</p>
        <table>
          <thead>
            <th>Nota</th>
          </thead>
          <tbody>
            <tr>
              <th>10</th>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  </div>
</template>
<script>
export default {
  name: "StudentGrade",
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
  color: white;
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
