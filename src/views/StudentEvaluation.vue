<template>
  <main class="main-content">
    <section class="main-section">
      <h1 class="main-title" tabindex="0">RESPONDA AVALIAÇÃO</h1>
      <p>Nome do aluno</p>
      <label class="label-questao"> QUESTÃO</label><br />
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
      <button class="button-action">Finalizar Prova</button>
    </section>
  </main>
</template>

<script>
export default {
  name: "StudentEvaluation",
};
</script>

<style></style>
