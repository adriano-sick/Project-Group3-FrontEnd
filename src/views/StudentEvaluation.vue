<template>
  <div class="container-default">
    <main class="main-content">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <span class="navbar-brand mb-0 h1 nav-brand-default">Infinite</span>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to="/student"
                >Início<span class="sr-only"></span
              ></router-link>
            </li>
            <li>
              <router-link class="nav-link" to="/studentevaluation"
                >Provas(você está aqui)</router-link
              >
            </li>
            <li>
              <router-link class="nav-link" to="/studentgrade"
                >Notas</router-link
              >
            </li>
          </ul>
        </div>

        <div
          class="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse nav-logoff"
        >
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">Sair</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <section class="main-section">
        <h1 class="main-title" tabindex="0">Realizar Avaliação</h1>
        <p>Nome do aluno</p>
        <label class="label-questao"> Questão</label><br />
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
  </div>
</template>

<script>
export default {
  name: "StudentEvaluation",
  methods: {
    backRoot() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
.container-default {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: black;
}
.nav-student {
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
.nav-student a {
  text-decoration: none;
  margin-bottom: 20px;
}

.nav-brand-default {
  padding: 15px;
}
.nav-logoff {
  margin-right: 5px;
}

.main-title {
  color: #0c827e;
  margin-top: 16px;
}
</style>
