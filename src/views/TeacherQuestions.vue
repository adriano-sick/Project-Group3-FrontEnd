<template>
  <div class="container-default">
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
            <router-link class="nav-link" to="/teacher">Início</router-link>
          </li>
          <li>
            <a class="nav-link" href="#"
              >Provas<span class="sr-only">(você está aqui)</span></a
            >
          </li>
          <li>
            <router-link class="nav-link" to="/teachergrades"
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

    <h1 class="main-title titulo" tabindex="0">Criar questão</h1>

    <div class="container form-criar-teste">
      <form>
        <div class="row">
          <div class="input-group">
            <span class="input-group-text radio-buttons-group" id="basic-addon1"
              >Inserir o título da questão</span
            >
            <input
              type="text"
              class="form-control"
              placeholder=""
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <hr />

        <div class="row mb-2">
          <div class="input-group">
            <div class="col-md-2">
              <input
                class="form-check-input"
                type="radio"
                name="Alternativa"
                id="Alternativa1"
                checked
              />
              <label class="form-check-label" for="Alternativa1">
                Resposta correta
              </label>
            </div>
            <div class="col-md-10">
              <input
                type="text"
                class="form-control"
                placeholder="Inserir o enunciado da alternativa"
              />
            </div>
          </div>
        </div>

        <div class="row mb-2">
          <div class="input-group">
            <div class="col-md-2">
              <input
                class="form-check-input"
                type="radio"
                name="Alternativa"
                id="Alternativa2"
              />
              <label class="form-check-label" for="Alternativa2">
                Resposta correta
              </label>
            </div>
            <div class="col-md-10">
              <input
                type="text"
                class="form-control"
                placeholder="Inserir o enunciado da alternativa"
              />
            </div>
          </div>
        </div>

        <div class="row mb-2">
          <div class="input-group">
            <div class="col-md-2">
              <input
                class="form-check-input"
                type="radio"
                name="Alternativa"
                id="Alternativa3"
              />
              <label class="form-check-label" for="Alternativa3">
                Resposta correta
              </label>
            </div>
            <div class="col-md-10">
              <input
                type="text"
                class="form-control"
                placeholder="Inserir o enunciado da alternativa"
              />
            </div>
          </div>
        </div>

        <div class="row mb-2">
          <div class="input-group">
            <div class="col-md-2">
              <input
                class="form-check-input"
                type="radio"
                name="Alternativa"
                id="Alternativa4"
              />
              <label class="form-check-label" for="Alternativa4">
                Resposta correta
              </label>
            </div>
            <div class="col-md-10">
              <input
                type="text"
                class="form-control"
                placeholder="Insira o enunciado da alternativa"
              />
            </div>
          </div>
        </div>

        <div class="row mb-2">
          <div class="input-group">
            <div class="col-md-2">
              <input
                class="form-check-input"
                type="radio"
                name="Alternativa"
                id="Alternativa5"
              />
              <label class="form-check-label" for="Alternativa5">
                Resposta correta
              </label>
            </div>
            <div class="col-md-10">
              <input
                type="text"
                class="form-control"
                placeholder="Insira o enunciado da alternativa"
              />
            </div>
          </div>
        </div>

        <hr />

        <router-link
          class="btn btn-outline-warning col-md-1"
          to="/teacherevaluationsstudents"
          >Voltar</router-link
        >
        |
        <router-link
          class="btn btn-outline-primary col-md-1"
          to="/teacherquestions"
          >Novo</router-link
        >
        |
        <router-link class="btn btn-outline-success col-md-1" to="/teacher"
          >Avançar</router-link
        >
      </form>
    </div>
  </div>
</template>

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
}
.nav-logoff {
  margin-right: 5px;
}
.radio-group {
  width: 40%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
.titulo {
  margin-top: 2%;
  color: #0c827e;
}
.radio-buttons-group {
  margin-left: 5px;
}
.form-criar-teste {
  margin-top: 1%;
}
.form-check-label {
  margin-left: 8px;
}
</style>
