<template>
  <div class="container-default">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <span class="navbar-brand mb-0 h1 nav-brand-Default">Infinite</span>
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

    <h1 class="main-title titulo" tabindex="0">Criar Avaliação</h1>

    <div class="container form-criar-teste">
      <form>
        <div class="row">
          <div class="col-md-11">
            <input
              class="form-control input-text text-center"
              type="text"
              placeholder="Preencher o título da avaliação"
              v-model="testName"
            />
          </div>
          <div class="col-md-1">
            <router-link
              class="btn btn-outline-primary"
              to="/teacherevaluationsstudents"
              >Criar</router-link
            >
          </div>
        </div>
      </form>

      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">TÍTULO DA AVALIAÇÃO</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Avaliação de Português</th>
            <td><button class="btn btn-outline-danger">Excluir</button></td>
          </tr>
          <tr>
            <th scope="row">Avaliação de Matemática</th>
            <td><button class="btn btn-outline-danger">Excluir</button></td>
          </tr>
          <tr>
            <th scope="row">Avaliação de História</th>
            <td><button class="btn btn-outline-danger">Excluir</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "TeacherEvaluations",
  data() {
    return { info: null };
  },
  methods: {
    backRoot() {
      this.$router.push("/teacher");
    },
  },
  name: "Students",
  data() {
    return {
      students: {
        userId: "",
        name: "",
        email: "",
        password: "",
        role: "",
      },
    };
  },
  methods: {
    getStudents: function () {
      axios
        .get("https://group3-anima.herokuapp.com/User/student")
        .then((response) => {
          this.students = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
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
.form-criar-teste {
  margin-top: 1%;
}
</style>
