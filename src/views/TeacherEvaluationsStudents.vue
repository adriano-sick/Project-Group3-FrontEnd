<template>
  <div class="container-Default">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <span class="navbar-brand mb-0 h1 nav-Brand-Default">Infinite</span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to="/teacher">Início</router-link>
            </li>
            <li>
              <a class="nav-link" href="#">Provas<span class="sr-only">(você está aqui)</span></a>
            </li>
            <li>
              <router-link class="nav-link" to="/teachergrades">Notas</router-link>
            </li>
          </ul>
        </div>

        <div class="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse nav-Logoff">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">Sair</router-link>
            </li>
          </ul>
        </div>
    </nav>

    <div class="container form-criar-teste">
      <h1 class="main-title titulo" tabindex="0">SELECIONE OS ESTUDANTES</h1>
      
      <form>
        <div class="row linha-checkbox">
          <div class="form-check form-switch col-md-5">
            <input class="form-check-input" type="checkbox" id="AlunoTeste1">
            <label class="form-check-label checkbox-pessoal" for="AlunoTeste1">Vinicius Severino Bernardo Fogaça</label>
          </div>
        </div>
        <div class="row linha-checkbox">
          <div class="form-check form-switch col-md-5">
            <input class="form-check-input" type="checkbox" id="AlunoTeste2">
            <label class="form-check-label checkbox-pessoal" for="AlunoTeste2">Marcelo Fábio Kevin Moreira</label>
          </div>
        </div>
        <div class="row linha-checkbox">
          <div class="form-check form-switch col-md-5">
            <input class="form-check-input" type="checkbox" id="AlunoTeste3">
            <label class="form-check-label checkbox-pessoal" for="AlunoTeste3">Manuel Manoel Julio da Cruz</label>
          </div>
        </div>
        <div class="row linha-checkbox">
          <div class="form-check form-switch col-md-5">
            <input class="form-check-input" type="checkbox" id="AlunoTeste4">
            <label class="form-check-label checkbox-pessoal" for="AlunoTeste4">Vitor Renato Nunes</label>
          </div>
        </div>
        <div class="row linha-checkbox">
          <div class="form-check form-switch col-md-5">
            <input class="form-check-input" type="checkbox" id="AlunoTeste5">
            <label class="form-check-label checkbox-pessoal" for="AlunoTeste5">Olivia Sophie Sabrina Pinto</label>
          </div>
        </div>

        <hr/>

        <router-link class="btn btn-outline-warning col-md-2" to="/teacherevaluations">Voltar</router-link> |
        <router-link class="btn btn-outline-danger col-md-2" to="/teacher">Início</router-link> |
        <router-link class="btn btn-outline-success col-md-2" to="/teacherquestions">Avançar</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "TeacherEvaluationsStudents",
  data () {
    return {
      students: {
        userId: "",
        name: "",
        email: "",
        password: "",
        role: ""
      }
    };
  },
  methods: {
    backRoot() {
      this.$router.push("/teacher");
    },
    getStudents: function () {
      axios.get('https://group3-anima.herokuapp.com/User/student')
        .then(response => {this.students = response.data})
        .catch(error => {console.log(error)})
    }
  }
};
</script>

<style>
.container-Default {
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
.nav-Logoff {
  margin-right: 5px;
}
.titulo {
  margin-top: 2%;
  color: #09605d;
}
.form-criar-teste {
  margin-top: 1%;
}
.checkbox-pessoal {
  margin-left: 0 auto;
  padding-left: 0 auto;
}
.linha-checkbox {
  margin-left: 30%;
}
</style>