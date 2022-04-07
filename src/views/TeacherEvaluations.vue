<template>
  <main class="main-content">
    <section class="main-section">
      <h1 class="main-title" tabindex="0">CRIAR AVALIAÇÃO</h1>

      <input class="input-text" type="text" placeholder="Escreva a questão:" />
      <label for="value-1">Alternativa 1</label>
      <input
        class="input-radio"
        type="radio"
        id="value-1"
        name="value-prova"
        value="value-1"
      />
      <label for="value-2">Alternativa 2</label>
      <input
        class="input-radio"
        type="radio"
        id="value-2"
        name="value-prova"
        value="value-2"
      />
      <label for="value-3">Alternativa 3</label>
      <input
        class="input-radio"
        type="radio"
        id="value-3"
        name="value-prova"
        value="value-3"
      />
      <button class="button-action">Criar Prova</button>
    </section>
  </main>
</template>

<script>
export default {
  name: "TeacherEvaluations",
};
</script>

<style></style>
