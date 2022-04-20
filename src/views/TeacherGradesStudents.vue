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
              <router-link class="nav-link" to="/teacher">Início</router-link>
            </li>
            <li>
              <router-link class="nav-link" to="/teacherevaluations"
                >Provas</router-link
              >
            </li>
            <li>
              <a class="nav-link" href="#"
                >Notas<span class="sr-only">(você está aqui)</span></a
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
        <h1 class="main-title" tabindex="0">Consultar os testes do aluno</h1>
        <div class="container">
          <table class="table table-dark table-responsive table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Avaliação de Português</th>
                <td>
                  <router-link
                    class="btn btn-outline-info col-md-4"
                    to="/teacherstudentsquestions"
                    >Avaliar respostas</router-link
                  >
                </td>
              </tr>
              <tr>
                <th scope="row">Avaliação de Matemática</th>
                <td>
                  <router-link
                    class="btn btn-outline-info col-md-4"
                    to="/teacherstudentsquestions"
                    >Avaliar respostas</router-link
                  >
                </td>
              </tr>
              <tr>
                <th scope="row">Avaliação de história</th>
                <td>
                  <router-link
                    class="btn btn-outline-info col-md-4"
                    to="/teacherstudentsquestions"
                    >Avaliar respostas</router-link
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
.main-title {
  color: #0c827e;
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
.nav-logoff {
  margin-right: 5px;
}
</style>