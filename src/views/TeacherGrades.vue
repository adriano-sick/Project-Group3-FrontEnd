<template>
  <div class="container">
    <main class="main-content">
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
