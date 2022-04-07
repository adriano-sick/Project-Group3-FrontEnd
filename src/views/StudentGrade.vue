<template>
  <div class="container">
    <main class="main-content">
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
