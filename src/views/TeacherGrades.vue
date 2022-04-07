<template>
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
</template>

<script>
export default {
  name: "TeacherGrades",
};
</script>

<style></style>
